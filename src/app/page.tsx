import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import ProgramCards from '@/components/sections/ProgramCards';
import About from '@/components/sections/About';
import Team from '@/components/sections/Team';
import Stages from '@/components/sections/Stages';
import Partners from '@/components/sections/Partners';
import Contact from '@/components/sections/Contact';

const Carousel = dynamic(() => import('@/components/sections/Carousel'), { ssr: false });

export const metadata: Metadata = {
  title: 'IUFMES - Institut Universitaire de Formation | Santé & Éducation',
  description: 'Formation d\'excellence en médecine, sciences infirmières, pharmacie et professorat au Gabon. Admissions 2024 ouvertes.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="py-12"></div>
      <Stats />
      <ProgramCards />
      <About />
      <Team />
      <Carousel />
      <Stages />
      <Partners />
      <Contact />
    </>
  );
}
