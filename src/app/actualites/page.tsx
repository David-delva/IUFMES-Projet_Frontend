import type { Metadata } from 'next';
import NewsPage from '@/components/sections/NewsPage';

export const metadata: Metadata = {
  title: 'Actualités | IUFMES',
  description: 'Découvrez les dernières actualités, événements et annonces de l\'IUFMES.',
};

export default function ActualitesPage() {
  return <NewsPage />;
}
