import { CheckCircle, Calendar, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Fond avec gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">Notre identité</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="text-primary">À propos de</span>{' '}
            <span className="text-secondary">l'IUFMES</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Institut Universitaire de Formation aux Métiers de l'Éducation et de la Santé
          </p>
        </div>

        {/* Notre Histoire */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                <Calendar className="w-7 h-7 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold text-primary">Notre Histoire</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border-l-4 border-primary">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Création</p>
                <p className="text-3xl font-extrabold text-primary">Mars 2017</p>
                <p className="text-sm text-gray-600 mt-2">Fondation de l'institut</p>
              </div>
              <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl p-6 border-l-4 border-secondary">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Reconnaissance</p>
                <p className="text-3xl font-extrabold text-secondary">Janvier 2021</p>
                <p className="text-sm text-gray-600 mt-2">Agrément officiel</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mot du Fondateur */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary via-primary-700 to-primary-800 text-white rounded-2xl p-8 sm:p-10 shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <Target className="w-7 h-7 text-gray-900" />
              </div>
              <h2 className="text-3xl font-bold">Mot du Fondateur</h2>
            </div>
            
            <div className="space-y-6 text-gray-100 leading-relaxed text-lg">
              <p className="text-white/95">
                Notre choix de fonder un établissement d'enseignement supérieur est l'expression d'une volonté citoyenne de renforcer l'action pédagogique au GABON et y créer un pôle d'enseignement orienté vers l'excellence.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-accent mb-4">Nos engagements</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Assurer à nos étudiants un espace pédagogique agréable',
                    'Mettre en place un système de suivi régulier des apprentissages',
                    'Développer l\'éveil scientifique et la curiosité intellectuelle',
                    'Développer des activités sportives et récréatives (ELITE Olympique)',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <span className="text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-accent/20 border-l-4 border-accent rounded-lg p-6 mt-8">
                <p className="text-xl font-bold text-accent mb-1">
                  M. MEZUI MBA Blondin Marius
                </p>
                <p className="text-white/80">Président-Fondateur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
