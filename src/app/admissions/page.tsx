import type { Metadata } from 'next';
import Admissions from '@/components/sections/Admissions';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Admissions & Tarifs | IUFMES',
  description: 'Informations sur les frais de scolarité, pièces à fournir et procédure d\'inscription pour les filières Santé et Professorat.',
};

export default function AdmissionsPage() {
  return (
    <>
      <Admissions />
      <Contact />
    </>
  );
}
