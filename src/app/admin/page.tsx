'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { ContactMessage } from '@/types';
import { Mail, Phone, LogIn, AlertCircle, Newspaper, MessageSquare, LogOut, Terminal, Activity, Database, Filter, ArrowUpDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('ALL');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await api.get('/contact');
      setMessages(response.data.messages);
      setError(null);
    } catch (error: any) {
      if (error.response?.status === 401) {
        setError('Non authentifié. Veuillez vous connecter.');
      } else {
        setError('Erreur lors du chargement des messages.');
      }
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: number, status: string) => {
    try {
      await api.patch(`/contact/${id}`, { status });
      fetchMessages();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout');
      router.push('/admin/login');
    } catch (error) {
      console.error('Erreur déconnexion:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-accent font-mono">LOADING...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="bg-slate-900 border-2 border-red-600 p-8 max-w-md">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-red-500 mb-2 font-mono text-center">ACCESS.DENIED</h2>
          <p className="text-slate-400 mb-6 text-center font-mono text-sm">{error}</p>
          <button
            onClick={() => router.push('/admin/login')}
            className="w-full bg-slate-800 hover:bg-primary border-2 border-primary text-white px-6 py-3 font-mono transition flex items-center justify-center gap-2"
          >
            <LogIn className="w-5 h-5" />
            LOGIN
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-800 to-primary-900">
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'linear-gradient(#00e68a 1px, transparent 1px), linear-gradient(90deg, #00e68a 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="bg-white/5 backdrop-blur-sm border-2 border-accent/20 rounded-2xl p-6 mb-8">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <Terminal className="w-7 h-7 text-primary" />
                </div>
                <h1 className="text-3xl font-bold text-white">Dashboard Admin</h1>
              </div>
              <div className="flex items-center gap-2 text-sm text-accent">
                <Activity className="w-4 h-4 animate-pulse" />
                <span>Système actif</span>
                <span>|</span>
                <span>{new Date().toLocaleDateString('fr-FR')}</span>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="bg-white/10 hover:bg-red-600 border-2 border-white/20 hover:border-red-600 text-white px-6 py-3 rounded-xl font-semibold transition flex items-center gap-2"
            >
              <LogOut className="w-5 h-5" />
              Déconnexion
            </button>
          </div>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <button
            onClick={() => router.push('/admin/news')}
            className="bg-white/10 backdrop-blur-sm border-2 border-accent/30 hover:border-accent hover:bg-white/20 p-6 rounded-2xl transition-all group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                <Newspaper className="w-7 h-7 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-sm text-accent/80">Module</div>
                <div className="text-xl font-bold text-white">Actualités</div>
              </div>
            </div>
            <div className="text-sm text-white/70">Gérer les actualités du site</div>
          </button>
          
          <div className="bg-white/10 backdrop-blur-sm border-2 border-accent/30 p-6 rounded-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center">
                <MessageSquare className="w-7 h-7 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-sm text-accent/80">Module</div>
                <div className="text-xl font-bold text-white">Messages</div>
              </div>
            </div>
            <div className="text-3xl font-bold text-accent mb-1">{messages.length}</div>
            <div className="text-sm text-white/70">Messages reçus</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 p-6 rounded-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                <Database className="w-7 h-7 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm text-white/60">Statut</div>
                <div className="text-xl font-bold text-white">Base de données</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              Connectée
            </div>
          </div>
        </div>
      
        <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl overflow-hidden">
          <div className="bg-primary-800/50 border-b border-white/10 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Messages reçus</h2>
                  <p className="text-sm text-white/60">{messages.length} message{messages.length > 1 ? 's' : ''} au total</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-lg text-xs text-yellow-300 font-semibold">
                  {messages.filter(m => m.status === 'PENDING').length} En attente
                </div>
                <div className="px-3 py-1 bg-accent/20 border border-accent/30 rounded-lg text-xs text-accent font-semibold">
                  {messages.filter(m => m.status === 'READ').length} Lus
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-b border-white/10 p-4 bg-primary-900/30">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-accent" />
                <span className="text-sm text-white/70 font-semibold">Filtrer:</span>
              </div>
              <button
                onClick={() => setFilterStatus('ALL')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                  filterStatus === 'ALL'
                    ? 'bg-accent text-primary border-2 border-accent'
                    : 'bg-white/10 text-white border-2 border-white/20 hover:border-white/40'
                }`}
              >
                Tous ({messages.length})
              </button>
              <button
                onClick={() => setFilterStatus('PENDING')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                  filterStatus === 'PENDING'
                    ? 'bg-yellow-500 text-primary border-2 border-yellow-500'
                    : 'bg-white/10 text-white border-2 border-white/20 hover:border-white/40'
                }`}
              >
                En attente ({messages.filter(m => m.status === 'PENDING').length})
              </button>
              <button
                onClick={() => setFilterStatus('READ')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                  filterStatus === 'READ'
                    ? 'bg-accent text-primary border-2 border-accent'
                    : 'bg-white/10 text-white border-2 border-white/20 hover:border-white/40'
                }`}
              >
                Lus ({messages.filter(m => m.status === 'READ').length})
              </button>
              <button
                onClick={() => setFilterStatus('ARCHIVED')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                  filterStatus === 'ARCHIVED'
                    ? 'bg-white/30 text-primary border-2 border-white/50'
                    : 'bg-white/10 text-white border-2 border-white/20 hover:border-white/40'
                }`}
              >
                Archivés ({messages.filter(m => m.status === 'ARCHIVED').length})
              </button>
              <div className="ml-auto flex items-center gap-2">
                <ArrowUpDown className="w-4 h-4 text-accent" />
                <button
                  onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 border-2 border-white/20 text-white rounded-lg text-sm font-semibold transition"
                >
                  {sortOrder === 'desc' ? 'Plus récents' : 'Plus anciens'}
                </button>
              </div>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            {messages
              .filter(msg => filterStatus === 'ALL' || msg.status === filterStatus)
              .sort((a, b) => {
                const dateA = new Date(a.createdAt).getTime();
                const dateB = new Date(b.createdAt).getTime();
                return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
              })
              .map((msg) => (
              <div
                key={msg.id}
                className="bg-white/5 hover:bg-white/10 border-2 border-white/10 hover:border-accent/30 rounded-xl p-6 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition">
                      <span className="text-accent font-bold text-lg">#{String(msg.id).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white">{msg.name}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            msg.status === 'PENDING'
                              ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                              : msg.status === 'READ'
                              ? 'bg-accent/20 text-accent border border-accent/30'
                              : 'bg-white/10 text-white/60 border border-white/20'
                          }`}
                        >
                          {msg.status}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-white/70 mb-3">
                        <span className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-accent" />
                          {msg.email}
                        </span>
                        {msg.phone && (
                          <span className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-accent" />
                            {msg.phone}
                          </span>
                        )}
                        <span className="flex items-center gap-2 text-white/50">
                          <Activity className="w-4 h-4" />
                          {new Date(msg.createdAt).toLocaleDateString('fr-FR', { 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                      <div className="bg-primary-900/30 border border-white/10 rounded-lg p-4 mb-3">
                        <div className="text-xs text-accent font-semibold mb-2">SUJET</div>
                        <div className="text-white font-medium mb-3">{msg.subject}</div>
                        <div className="text-xs text-accent font-semibold mb-2">MESSAGE</div>
                        <div className="text-white/80 text-sm leading-relaxed">{msg.message}</div>
                      </div>
                    </div>
                  </div>
                  <select
                    value={msg.status}
                    onChange={(e) => updateStatus(msg.id, e.target.value)}
                    className="bg-white/10 hover:bg-white/20 border-2 border-white/20 focus:border-accent text-white px-4 py-2 rounded-lg text-sm font-semibold outline-none transition cursor-pointer"
                  >
                    <option value="PENDING" className="bg-primary-900">En attente</option>
                    <option value="READ" className="bg-primary-900">Lu</option>
                    <option value="ARCHIVED" className="bg-primary-900">Archivé</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>

        {messages.filter(msg => filterStatus === 'ALL' || msg.status === filterStatus).length === 0 && (
          <div className="text-center py-12 text-white/60 text-lg">
            {messages.length === 0 ? 'Aucun message pour le moment' : `Aucun message ${filterStatus === 'PENDING' ? 'en attente' : filterStatus === 'READ' ? 'lu' : 'archivé'}`}
          </div>
        )}
      </div>
    </div>
  );
}
