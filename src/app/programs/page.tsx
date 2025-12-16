import type { Metadata } from 'next';
import FilieresOverview from '@/components/sections/FilieresOverview';
import Stages from '@/components/sections/Stages';
import Partners from '@/components/sections/Partners';

export const metadata: Metadata = {
  title: 'Nos Filières | IUFMES',
  description: 'Découvrez nos programmes en médecine, sciences infirmières, pharmacie, kinésithérapie et professorat.',
};

export default function ProgramsPage() {
  return (
    <>
      <FilieresOverview />
      <Stages />
      <Partners />
    </>
  );
}
