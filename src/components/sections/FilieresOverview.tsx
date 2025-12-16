'use client';
import { useState } from 'react';
import { GraduationCap, Stethoscope, Cog, ChevronDown, ChevronUp, X } from 'lucide-react';

export default function FilieresOverview() {
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);
  const [selectedFiliere, setSelectedFiliere] = useState<number | null>(null);

  const filieres = [
    {
      icon: Stethoscope,
      title: 'Sciences de la Santé',
      color: 'from-primary to-primary-800',
      iconBg: 'bg-accent',
      image: '/images/filières/santé.jpg',
      parcours: ['Licence', 'Master', 'Doctorat d\'État'],
      modalites: ['Cours magistraux', 'Travaux pratiques', 'Stages hospitaliers', 'Examens semestriels', 'Mémoire'],
      programs: [
        { name: 'Sciences Biomédicales', description: 'Formation en sciences biomédicales avec parcours Licence et Master.' },
        { name: 'Médecine Générale', description: 'Formation complète menant au Doctorat d\'État en médecine générale.' }
      ]
    },
    {
      icon: GraduationCap,
      title: 'Sciences de l\'Éducation',
      color: 'from-secondary to-secondary-700',
      iconBg: 'bg-accent',
      image: '/images/filières/Sciences de l\'Éducation.jpeg',
      parcours: ['Licence professionnelle', 'Master professionnel'],
      modalites: ['Formation théorique', 'Stages en établissements', 'Mémoire professionnel', 'Soutenance', 'Certification État'],
      programs: [
        { name: 'Anglais', description: 'Licence et Master professionnel pour l\'enseignement de l\'anglais.' },
        { name: 'Espagnol', description: 'Licence et Master professionnel pour l\'enseignement de l\'espagnol.' },
        { name: 'Français', description: 'Licence et Master professionnel pour l\'enseignement du français.' },
        { name: 'Histoire-Géographie', description: 'Licence et Master professionnel pour l\'enseignement de l\'histoire et de la géographie.' },
        { name: 'SVT', description: 'Licence et Master professionnel pour l\'enseignement des Sciences de la Vie et de la Terre.' },
        { name: 'Philosophie', description: 'Licence et Master professionnel pour l\'enseignement de la philosophie.' },
        { name: 'Mathématiques', description: 'Licence et Master professionnel pour l\'enseignement des mathématiques.' },
        { name: 'Physique-Chimie', description: 'Licence et Master professionnel pour l\'enseignement de la physique et de la chimie.' }
      ]
    },
    {
      icon: Cog,
      title: 'Sciences et Technologies',
      color: 'from-accent to-accent-600',
      iconBg: 'bg-primary',
      image: 'images/Matériel_iufmes/photo 5.jpg',
      parcours: ['Licence', 'Master'],
      modalites: ['Cours théoriques', 'Travaux pratiques', 'Projets industriels', 'Stage entreprise', 'Projet fin études'],
      programs: [
        { name: 'Conception Mécanique Intégrée (CMI)', description: 'Formation en conception et modélisation de systèmes mécaniques. Parcours Licence et Master.' },
        { name: 'Matériaux et Innovation Technologique (MIT)', description: 'Recherche et développement de nouveaux matériaux pour l\'industrie. Parcours Licence et Master.' },
        { name: 'Fiabilité et Qualité Industrielle (FQI)', description: 'Gestion de la qualité, contrôle et optimisation des processus industriels. Parcours Master.' }
      ]
    },
    {
      icon: GraduationCap,
      title: 'Sciences Juridiques et Économiques',
      color: 'from-primary to-primary-800',
      iconBg: 'bg-accent',
      image: '/images/filières/Sciences Juridiques et Économiques.jpeg',
      parcours: ['Licence', 'Master', 'Master professionnel'],
      modalites: ['Cours magistraux', 'Travaux dirigés', 'Études de cas', 'Examens écrits/oraux', 'Mémoire recherche'],
      programs: [
        { name: 'Droit', description: 'Formation juridique complète avec parcours Licence, Master et Master professionnel.' },
        { name: 'Économie', description: 'Formation en sciences économiques avec parcours Licence, Master et Master professionnel.' }
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-primary/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-3 sm:mb-4 tracking-tight px-2">Nos Filières d'Excellence</h2>
          <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">Des programmes innovants pour façonner les leaders de demain</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full mx-auto px-4">
          {filieres.map((filiere, index) => (
            <div key={index} className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-4 cursor-pointer" onClick={() => setSelectedFiliere(index)}>
              {/* Bordure animée */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl p-[3px] z-0">
                <div className="w-full h-full bg-white rounded-2xl sm:rounded-3xl"></div>
              </div>
              
              <div className="relative">
                <div className="relative h-72 sm:h-80 lg:h-96 overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20"></div>
                  
                  <img src={filiere.image} alt={filiere.title} className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700" />
                  
                  {/* Overlay avec motif */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity" style={{backgroundImage: 'linear-gradient(45deg, #00337a 25%, transparent 25%, transparent 75%, #00337a 75%), linear-gradient(45deg, #00337a 25%, transparent 25%, transparent 75%, #00337a 75%)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px'}}></div>
                  
                  {/* Badge numéro */}
                  <div className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-accent/90 backdrop-blur-sm rounded-xl flex items-center justify-center border-2 border-white/30 shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-primary font-bold text-lg sm:text-xl">{index + 1}</span>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-10">
                    <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 ${filiere.iconBg} rounded-xl sm:rounded-2xl mb-2 sm:mb-3 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-4 border-white/20`}>
                      <filiere.icon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-accent transition-colors">{filiere.title}</h3>
                    {filiere.subtitle && <p className="text-xs text-white/90 leading-relaxed">{filiere.subtitle}</p>}
                    <div className="h-1 w-16 bg-gradient-to-r from-accent to-transparent rounded-full group-hover:w-24 transition-all duration-500 mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
          

        {selectedFiliere !== null && (
          <div className="fixed inset-0 bg-slate-900/95 backdrop-blur-md z-50 flex items-center justify-center p-4" onClick={() => setSelectedFiliere(null)}>
            <div className="bg-slate-50 border-2 border-primary/20 max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'linear-gradient(#00337a 1px, transparent 1px), linear-gradient(90deg, #00337a 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
              
              <div className="relative border-b-2 border-primary/20">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                <img src={filieres[selectedFiliere].image} alt={filieres[selectedFiliere].title} className="w-full h-48 sm:h-64 object-cover opacity-20 grayscale" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-slate-900/90"></div>
                
                <button onClick={() => setSelectedFiliere(null)} className="absolute top-4 right-4 bg-slate-900 hover:bg-accent border-2 border-accent/50 hover:border-accent p-2 transition group">
                  <X className="w-5 h-5 text-accent group-hover:text-slate-900" />
                </button>
                
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-accent font-mono text-xs tracking-wider">
                        <span className="w-2 h-2 bg-accent animate-pulse"></span>
                        FILIÈRE #{String(selectedFiliere + 1).padStart(2, '0')}
                      </div>
                      <div className="h-px w-32 bg-gradient-to-r from-accent to-transparent"></div>
                    </div>
                  </div>
                  
                  <div>
                    {(() => {
                      const IconComponent = filieres[selectedFiliere].icon;
                      return (
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-accent border-2 border-slate-900 mb-4">
                          <IconComponent className="w-7 h-7 text-slate-900" />
                        </div>
                      );
                    })()}
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-mono tracking-tight">{filieres[selectedFiliere].title.toUpperCase()}</h2>
                    {filieres[selectedFiliere].subtitle && <p className="text-sm text-accent/90 font-mono">{filieres[selectedFiliere].subtitle}</p>}
                  </div>
                </div>
              </div>
              
              <div className="p-6 sm:p-8 relative">
                <div className="mb-6 pb-4 border-b border-primary/20">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-accent"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {filieres[selectedFiliere].programs.map((program, i) => (
                    <div key={i} className="border-l-4 border-accent bg-white p-5 hover:shadow-lg transition-all group relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 opacity-5">
                        <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(45deg, #00337a 25%, transparent 25%, transparent 75%, #00337a 75%), linear-gradient(45deg, #00337a 25%, transparent 25%, transparent 75%, #00337a 75%)', backgroundSize: '4px 4px', backgroundPosition: '0 0, 2px 2px'}}></div>
                      </div>
                      <div className="flex items-start gap-4 relative">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 border border-primary/30 flex items-center justify-center font-mono text-xs font-bold text-primary">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition">{program.name}</h4>
                          <p className="text-sm text-slate-600 leading-relaxed">{program.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="border-l-4 border-primary bg-white p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-primary/10 border border-primary/30 flex items-center justify-center">
                        <GraduationCap className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="text-lg font-bold text-primary font-mono">PARCOURS</h4>
                    </div>
                    <ul className="space-y-2">
                      {filieres[selectedFiliere].parcours.map((p, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 bg-accent"></span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-accent bg-white p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-accent/10 border border-accent/30 flex items-center justify-center">
                        <Cog className="w-4 h-4 text-accent" />
                      </div>
                      <h4 className="text-lg font-bold text-accent font-mono">MODALITÉS</h4>
                    </div>
                    <ul className="space-y-2">
                      {filieres[selectedFiliere].modalites.map((m, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 bg-primary"></span>
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-primary/20 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>HEALTH & EDUCATION UNIVERSITY</span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent animate-pulse"></span>
                    SYSTÈME ACTIF
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
