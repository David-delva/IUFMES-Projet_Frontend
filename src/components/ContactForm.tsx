'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import api from '@/lib/api';
import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, User, Mail, Phone, MessageSquare } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Nom requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Sujet requis'),
  message: z.string().min(10, 'Message trop court (min. 10 caractères)'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    try {
      await api.post('/contact', data);
      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl border-2 border-primary/10 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div className="group">
            <label className="block text-xs sm:text-sm font-bold mb-2 text-primary flex items-center gap-2">
              <User className="w-4 h-4" />
              Nom complet *
            </label>
            <div className="relative">
              <input
                {...register('name')}
                placeholder="Jean Dupont"
                className="w-full px-4 py-3 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all outline-none bg-white group-hover:border-primary/30"
              />
            </div>
            {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-2 flex items-center gap-1 font-medium"><AlertCircle className="w-4 h-4" />{errors.name.message}</p>}
          </div>
          
          <div className="group">
            <label className="block text-xs sm:text-sm font-bold mb-2 text-primary flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email *
            </label>
            <div className="relative">
              <input
                type="email"
                {...register('email')}
                placeholder="jean.dupont@example.com"
                className="w-full px-4 py-3 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all outline-none bg-white group-hover:border-primary/30"
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-2 flex items-center gap-1 font-medium"><AlertCircle className="w-4 h-4" />{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div className="group">
            <label className="block text-xs sm:text-sm font-bold mb-2 text-primary flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Téléphone
            </label>
            <input
              {...register('phone')}
              placeholder="+33 6 12 34 56 78"
              className="w-full px-4 py-3 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all outline-none bg-white group-hover:border-primary/30"
            />
          </div>
          
          <div className="group">
            <label className="block text-xs sm:text-sm font-bold mb-2 text-primary flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Sujet *
            </label>
            <input
              {...register('subject')}
              placeholder="Demande d'information"
              className="w-full px-4 py-3 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all outline-none bg-white group-hover:border-primary/30"
            />
            {errors.subject && <p className="text-red-500 text-xs sm:text-sm mt-2 flex items-center gap-1 font-medium"><AlertCircle className="w-4 h-4" />{errors.subject.message}</p>}
          </div>
        </div>

        <div className="mb-6 group">
          <label className="block text-xs sm:text-sm font-bold mb-2 text-primary flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Message *
          </label>
          <textarea
            {...register('message')}
            rows={6}
            placeholder="Bonjour, je souhaiterais obtenir des informations sur..."
            className="w-full px-4 py-3 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all outline-none resize-none bg-white group-hover:border-primary/30"
          />
          {errors.message && <p className="text-red-500 text-xs sm:text-sm mt-2 flex items-center gap-1 font-medium"><AlertCircle className="w-4 h-4" />{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-gradient-to-r from-primary to-primary-800 hover:from-primary-700 hover:to-primary-900 text-white py-4 rounded-xl font-bold text-base sm:text-lg flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <Send className="w-5 h-5 relative z-10" />
          <span className="relative z-10">{status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}</span>
        </button>

        {status === 'success' && (
          <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 text-green-800 p-4 rounded-xl flex items-center gap-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-bold text-base">Message envoyé avec succès !</p>
              <p className="text-sm text-green-700">Nous vous répondrons sous 24h.</p>
            </div>
          </div>
        )}
        
        {status === 'error' && (
          <div className="mt-6 bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-300 text-red-800 p-4 rounded-xl flex items-center gap-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-bold text-base">Erreur lors de l'envoi</p>
              <p className="text-sm text-red-700">Veuillez réessayer ultérieurement.</p>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
