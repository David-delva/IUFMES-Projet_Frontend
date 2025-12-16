'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const mainLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'À propos' },
    { href: '/programs', label: 'Filières' },
    { href: '/actualites', label: 'Actualités' },
    { href: '/contact', label: 'Contact' },
  ];

  const moreLinks = [
    { href: '/team', label: 'Équipe' },
    { href: '/mot-du-fondateur', label: 'Mot du Fondateur' },
    { href: '/histoire', label: 'Histoire' },
    { href: '/galerie', label: 'Galerie' },
  ];

  return (
    <header className="bg-gradient-to-r from-primary via-primary-700 to-primary-800 shadow-md sticky top-0 z-50" role="banner">
      <nav className="container mx-auto px-4 sm:px-6 py-3" aria-label="Navigation principale">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 sm:gap-4 group" aria-label="IUFMES - Accueil">
            <div className="relative">
              <Image
                src="/images/logo.jpg"
                alt="Logo IUFMES"
                width={60}
                height={60}
                className="rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                priority
              />
              <div className="absolute -inset-1 bg-accent/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
            </div>
            <div className="hidden lg:block">
              <span className="text-xl font-extrabold text-white block tracking-tight">IUFMES</span>
              <span className="text-xs text-accent font-semibold uppercase tracking-wide leading-tight">Institut Universitaire de Formation<br/>aux Métiers de l'Éducation et de la Santé</span>
            </div>
            <span className="lg:hidden text-xl font-extrabold text-white">IUFMES</span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-accent font-medium transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
            
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-white/90 hover:text-accent font-medium transition-colors text-sm"
              >
                Plus
                <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/admissions"
              className="bg-accent hover:bg-accent-600 text-gray-900 px-5 py-2 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl text-sm"
            >
              Admissions
            </Link>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-accent transition-colors"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <nav className="flex flex-col gap-2" aria-label="Navigation mobile">
              {[...mainLinks, ...moreLinks].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/90 hover:text-accent font-medium py-2 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
}
