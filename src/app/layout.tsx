import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

/**
 * Configuration de la police Inter (Google Font)
 * - Police sans-serif professionnelle
 * - Optimisée pour la lisibilité
 */
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'IUFMES - Institut Universitaire de Formation aux Métiers de l\'Éducation et de la Santé',
  description: 'Former les leaders de la santé et de l\'éducation de demain. Formation d\'excellence en médecine, sciences infirmières, pharmacie et plus.',
  keywords: ['université', 'santé', 'médecine', 'formation', 'éducation', 'IUFMES'],
  icons: {
    icon: '/favicon.svg',
  },
};

/**
 * Root Layout - Structure principale de l'application
 * - Intégration de Navbar et Footer
 * - Configuration de la police Inter
 * - Balises sémantiques HTML5
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#F8F9FA]`}>
        {/* Skip to main content pour accessibilité */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-gray-900 px-4 py-2 rounded-lg font-bold z-50"
        >
          Aller au contenu principal
        </a>

        <Navbar />
        
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
