import type { Metadata } from 'next';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact | IUFMES',
  description: 'Contactez l\'IUFMES pour toute demande d\'information. Téléphone, email et formulaire de contact disponibles.',
};

export default function ContactPage() {
  return (
    <>
      <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden">
        <img
          src="/images/Photo_Contactez-nous/header.jpg"
          alt="Contactez-nous"
          className="w-full h-full object-cover animate-pulse"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center px-4">
          </h1>
        </div>
      </div>
      <Contact />
    </>
  );
}
