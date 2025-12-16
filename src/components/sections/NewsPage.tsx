'use client';

import { useEffect, useState } from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import api from '@/lib/api';
import Link from 'next/link';

interface News {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
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

export default function NewsPage() {
  const [news, setNews] = useState<News[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, [selectedCategory]);

  const fetchNews = async () => {
    try {
      const params = selectedCategory ? `?category=${selectedCategory}` : '';
      const response = await api.get(`/news${params}`);
      const newsData = response.data.data;
      console.log('News data:', newsData);
      if (newsData.length > 0) {
        console.log('First image URL:', newsData[0].imageUrl?.substring(0, 100));
      }
      setNews(newsData);
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary/5">
      <div className="relative h-64 bg-gradient-to-r from-primary to-primary-800 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/news/background.jpeg" alt="" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(45deg, #00337a 25%, transparent 25%, transparent 75%, #00337a 75%), linear-gradient(45deg, #00337a 25%, transparent 25%, transparent 75%, #00337a 75%)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px'}}></div>
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Actualités</h1>
          <p className="text-xl text-white/90">Restez informé de nos dernières nouvelles</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setSelectedCategory('')}
            className={`px-4 py-2 rounded-full font-medium transition ${!selectedCategory ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            Toutes
          </button>
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-4 py-2 rounded-full font-medium transition ${selectedCategory === key ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              {label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : news.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
            <p className="text-gray-500 text-lg">Aucune actualité disponible pour le moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <article key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  {item.imageUrl && item.imageUrl.trim() !== '' ? (
                    <img 
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        console.error('Image load error for:', item.title);
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = parent.querySelector('.fallback-image');
                          if (fallback) {
                            (fallback as HTMLElement).classList.remove('hidden');
                          }
                        }
                      }}
                      onLoad={() => console.log('Image loaded successfully for:', item.title)}
                    />
                  ) : null}
                  <div className={`fallback-image w-full h-full bg-gradient-to-br from-primary to-primary-800 flex items-center justify-center ${item.imageUrl && item.imageUrl.trim() !== '' ? 'hidden' : ''}`}>
                    <span className="text-white text-6xl font-bold opacity-20">IUFMES</span>
                  </div>
                  <div className={`absolute top-4 left-4 ${categoryColors[item.category]} text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1`}>
                    <Tag className="w-3 h-3" />
                    {categoryLabels[item.category]}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    {formatDate(item.publishedAt)}
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition line-clamp-2">
                    {item.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                  
                  <Link href={`/actualites/${item.slug}`} className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                    Lire la suite
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
