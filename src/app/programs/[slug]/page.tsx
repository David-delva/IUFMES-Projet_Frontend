'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import api from '@/lib/api';
import { Clock, Award, Users, ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';

interface Teacher {
  id: number;
  name: string;
  title: string;
  specialty: string;
  bio?: string;
}

interface Program {
  id: number;
  name: string;
  slug: string;
  description: string;
  duration: string;
  degree: string;
  imageUrl?: string;
  teachers: Teacher[];
}

export default function ProgramDetailPage() {
  const params = useParams();
  const [program, setProgram] = useState<Program | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const response = await api.get(`/programs/${params.slug}`);
        setProgram(response.data.program);
      } catch (error) {
        console.error('Erreur lors du chargement du programme:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchProgram();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center items-center min-h-screen">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
      </div>
    );
  }

  if (error || !program) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Programme non trouvé</h1>
        <Link href="/programs" className="text-primary hover:underline">
          Retour aux programmes
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-600 mb-6 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour aux programmes
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">{program.name}</h1>
          <div className="flex flex-wrap gap-4 text-lg">
            <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Clock className="w-5 h-5" />
              {program.duration}
            </span>
            <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Award className="w-5 h-5" />
              {program.degree}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Description */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Description du programme</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{program.description}</p>
          </div>

          {/* Teachers */}
          {program.teachers && program.teachers.length > 0 && (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Users className="w-8 h-8" />
                Corps Enseignant
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {program.teachers.map((teacher) => (
                  <div
                    key={teacher.id}
                    className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-primary transition"
                  >
                    <h3 className="text-xl font-bold text-primary mb-2">{teacher.name}</h3>
                    <p className="text-secondary font-semibold mb-1">{teacher.title}</p>
                    <p className="text-gray-600 text-sm mb-3">Spécialité: {teacher.specialty}</p>
                    {teacher.bio && <p className="text-gray-700 text-sm">{teacher.bio}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-8 text-center">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-600 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              S'inscrire à ce programme
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
