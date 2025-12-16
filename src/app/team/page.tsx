import type { Metadata } from 'next';
import Organigramme from '@/components/sections/Organigramme';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Notre Équipe | IUFMES',
  description: 'Découvrez l\'équipe dirigeante, le personnel administratif et le conseil scientifique de l\'IUFMES.',
};

export default function TeamPage() {
  return (
    <>
      <Organigramme />
      <Contact />
    </>
  );
}
