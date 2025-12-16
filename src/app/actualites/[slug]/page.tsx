'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import api from '@/lib/api';

interface NewsDetail {
  id: number;
  title: string;
  content: string;
  imageUrl?: string;
  category: string;
  publishedAt: string;
}

const categoryLabels: Record<string, string> = {
  GENERAL: 'Général',
  ACADEMIC: 'Académique',
  EVENTS: 'Événements',
  RESEARCH: 'Recherche',
  ADMISSIONS: 'Admissions',
  PARTNERSHIPS: 'Partenariats',
};

const categoryColors: Record<string, string> = {
  GENERAL: 'bg-gray-500',
  ACADEMIC: 'bg-primary',
  EVENTS: 'bg-accent',
  RESEARCH: 'bg-purple-500',
  ADMISSIONS: 'bg-orange-500',
  PARTNERSHIPS: 'bg-blue-500',
};

export default function NewsDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [news, setNews] = useState<NewsDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, [params.slug]);

  const fetchNews = async () => {
    try {
      const response = await api.get(`/news/${params.slug}`);
      setNews(response.data.data);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Actualité non trouvée</h1>
          <button onClick={() => router.push('/actualites')} className="text-primary hover:underline">
            Retour aux actualités
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary/5">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => router.push('/actualites')}
          className="inline-flex items-center gap-2 text-primary font-semibold mb-6 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Retour aux actualités
        </button>

        <article className="bg-white rounded-3xl overflow-hidden shadow-2xl">
          {news.imageUrl && (
            <div className="relative w-full aspect-[21/9] overflow-hidden bg-gray-100">
              <img 
                src={news.imageUrl} 
                alt={news.title} 
                className="w-full h-full object-cover object-center" 
                onError={(e) => e.currentTarget.style.display = 'none'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          )}

          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className={`${categoryColors[news.category]} text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2`}>
                <Tag className="w-4 h-4" />
                {categoryLabels[news.category]}
              </span>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-5 h-5" />
                {formatDate(news.publishedAt)}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              {news.title}
            </h1>

            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: news.content.replace(/\n/g, '<br />') }} />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
