import type { Metadata } from 'next';
import About from '@/components/sections/About';
import Team from '@/components/sections/Team';
import Stats from '@/components/sections/Stats';

export const metadata: Metadata = {
  title: 'À propos | IUFMES',
  description: 'Découvrez l\'histoire de l\'IUFMES, notre équipe et notre mission de former les leaders de la santé et de l\'enseignement.',
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Stats />
      <Team />
    </>
  );
}
