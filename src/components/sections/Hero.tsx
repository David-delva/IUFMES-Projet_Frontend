'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import VideoModal from './VideoModal';

/**
 * Hero Section - Section d'accueil principale
 * - Titre accrocheur avec gradient
 * - Description impactante
 * - 2 CTA (Principal: Accent, Secondaire: Primary Outline)
 * - Image placeholder à droite (desktop) / dessous (mobile)
 * - Contraste WCAG AA respecté
 */
export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <img
          src="/images/uifmes_photos.jpg"
          alt="Campus IUFMES"
          className="w-full h-full object-cover brightness-200 animate-[zoom_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Contenu texte */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/50 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" aria-hidden="true"></span>
              <span className="text-sm font-semibold text-accent">Admissions 2024 ouvertes</span>
            </div>

            {/* Titre principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white animate-fade-rotate">
              Former les Leaders de la{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary animate-pulse">
                Santé et de l'Éducation
              </span>{' '}
              de Demain
            </h1>
            
          </div>

          {/* Texte à droite */}
          <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 max-w-sm xl:max-w-md">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary rounded-2xl blur-xl opacity-60 animate-bounce-slow"></div>
              <div className="relative bg-gradient-to-br from-primary via-primary-700 to-primary-800 backdrop-blur-md border-2 border-accent rounded-2xl p-6 xl:p-8 shadow-2xl">
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/30 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-secondary/30 rounded-full blur-2xl"></div>
                <p className="relative text-white font-extrabold text-2xl xl:text-3xl leading-tight text-center animate-scroll-lr">
                  <span className="text-accent">Première école privée</span> de professorat et Médecine <span className="text-accent">au GABON</span>
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-scroll-lr">
              L'IUFMES vous offre une formation d'excellence alliant rigueur académique, 
              innovation pédagogique et accompagnement personnalisé pour réussir votre carrière 
              dans les métiers de l'éducation et de la santé.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-600 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Découvrir nos filières
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              
              <button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all"
              >
                <Play className="w-5 h-5" aria-hidden="true" />
                Voir la vidéo
              </button>
            </div>
          </div>

          {/* Espace vide pour équilibrer la mise en page */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
    </>
  );
}
