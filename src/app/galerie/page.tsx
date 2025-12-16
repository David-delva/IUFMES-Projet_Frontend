'use client';

import { useState } from 'react';

export default function Galerie() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<'tous' | 'etudiants' | 'partenaires' | 'materiel'>('tous');

  const etudiants = [
    { src: '/images/image_des_étudiants/étudiants octobre rose.jpg', title: 'Octobre Rose', description: 'Étudiants engagés' },
    { src: '/images/image_des_étudiants/octobre rose.jpg', title: 'Campagne Octobre Rose', description: 'Sensibilisation santé' },
    { src: '/images/image_des_étudiants/photo_sotenance.jpg', title: 'Soutenance', description: 'Présentation de projet' },
    { src: '/images/image_des_étudiants/sotenance.jpg', title: 'Soutenance académique', description: 'Évaluation finale' },
    { src: '/images/image_des_étudiants/soutenance2.jpg', title: 'Soutenance 2024', description: 'Succès de nos étudiants' },
    { src: '/images/image_des_étudiants/WhatsApp Image 2025-12-09 à 22.10.20_80135027.jpg', title: 'Vie étudiante', description: 'Moments de formation' },
    { src: '/images/image_des_étudiants/WhatsApp Image 2025-12-09 à 22.10.53_b76e4dde.jpg', title: 'Formation pratique', description: 'Apprentissage actif' },
    { src: '/images/image_des_étudiants/WhatsApp Image 2025-12-09 à 22.10.54_a83e5d53.jpg', title: 'Étudiants IUFMES', description: 'Excellence académique' },
    { src: '/images/image_des_étudiants/WhatsApp Image 2025-12-10 à 14.37.52_17081e23.jpg', title: 'Travaux pratiques', description: 'Formation clinique' },
    { src: '/images/image_des_étudiants/WhatsApp Image 2025-12-10 à 14.38.17_fa355321.jpg', title: 'Groupe d\'étudiants', description: 'Esprit d\'équipe' },
    { src: '/images/image_des_étudiants/WhatsApp Image 2025-12-10 à 14.38.37_c0af58a3.jpg', title: 'Session de cours', description: 'Apprentissage collaboratif' },
    { src: '/images/image_des_étudiants/WhatsApp Image 2025-12-10 à 14.38.49_acd3d5f4.jpg', title: 'Activités étudiantes', description: 'Vie de campus' },
    { src: '/images/image_des_étudiants/WhatsApp Image 2025-12-10 à 15.02.16_3b4aec2c.jpg', title: 'Formation médicale', description: 'Pratique professionnelle' },
    { src: '/images/image_des_étudiants/WhatsApp Image 2025-12-10 à 15.34.27_d838bb19.jpg', title: 'Étudiants en action', description: 'Compétences pratiques' },
    { src: '/images/image_des_étudiants/WhatsApp Image 2025-12-10 à 15.34.43_005524f7.jpg', title: 'Promotion 2024', description: 'Nos futurs professionnels' },
  ];

  const partenaires = [
    { src: '/images/image_partenaire/Institut Privé de Formation et de Recherches Médicales (IPFORMED).jpeg', title: 'IPFORMED', description: 'Partenaire Sénégal' },
    { src: '/images/image_partenaire/Université Kofi Annan fondateur et notre representante.jpg', title: 'Rencontre partenariat', description: 'Coopération académique' },
    { src: '/images/image_partenaire/Université Kofi Annan.jpg', title: 'Université Kofi Annan', description: 'Partenaire Guinée' },
    { src: '/images/image_partenaire/WhatsApp Image 2025-12-10 à 15.03.06_5fc79a83.jpg', title: 'Collaboration internationale', description: 'Réseau de partenaires' },
  ];

  const materiel = [
    { src: '/images/Matériel_iufmes/photo 5.jpg', title: 'Équipements médicaux', description: 'Matériel de pointe' },
    { src: '/images/Matériel_iufmes/WhatsApp Image 2025-12-09 à 22.11.53_38abf6e3.jpg', title: 'Laboratoire', description: 'Installations modernes' },
    { src: '/images/Matériel_iufmes/WhatsApp Image 2025-12-09 à 22.11.53_8f5c94d8.jpg', title: 'Matériel pédagogique', description: 'Outils de formation' },
    { src: '/images/Matériel_iufmes/WhatsApp Image 2025-12-09 à 22.11.54_3cff5852.jpg', title: 'Équipements cliniques', description: 'Technologies avancées' },
    { src: '/images/Matériel_iufmes/WhatsApp Image 2025-12-09 à 22.11.54_50410810.jpg', title: 'Instruments médicaux', description: 'Qualité professionnelle' },
    { src: '/images/Matériel_iufmes/WhatsApp Image 2025-12-09 à 22.11.54_68b2d7ec.jpg', title: 'Salle de pratique', description: 'Environnement réaliste' },
    { src: '/images/Matériel_iufmes/WhatsApp Image 2025-12-09 à 22.11.55_69f36c36.jpg', title: 'Matériel didactique', description: 'Ressources pédagogiques' },
    { src: '/images/Matériel_iufmes/WhatsApp Image 2025-12-09 à 22.11.55_a448e2bf.jpg', title: 'Équipements spécialisés', description: 'Formation de qualité' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-accent/5 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-3 sm:mb-4 tracking-tight">
            Galerie Photos
          </h1>
          <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Découvrez notre institut, nos étudiants, nos partenaires et nos équipements
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveFilter('tous')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-bold transition-all ${
                activeFilter === 'tous'
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => setActiveFilter('etudiants')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-bold transition-all ${
                activeFilter === 'etudiants'
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
              }`}
            >
              Étudiants
            </button>
            <button
              onClick={() => setActiveFilter('partenaires')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-bold transition-all ${
                activeFilter === 'partenaires'
                  ? 'bg-secondary text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
              }`}
            >
              Partenaires
            </button>
            <button
              onClick={() => setActiveFilter('materiel')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-bold transition-all ${
                activeFilter === 'materiel'
                  ? 'bg-accent text-gray-900 shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
              }`}
            >
              Matériel
            </button>
          </div>
        </div>

        {(activeFilter === 'tous' || activeFilter === 'etudiants') && (
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-4 mb-8 sm:mb-10">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-full shadow-lg border-2 border-primary/20">Nos Étudiants</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary via-transparent to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {etudiants.map((photo, index) => (
              <div key={index} onClick={() => setSelectedImage(photo.src)} className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
                <img src={photo.src} alt={photo.title} className="w-full h-56 sm:h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{photo.title}</h3>
                    <p className="text-xs sm:text-sm text-accent">{photo.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}

        {(activeFilter === 'tous' || activeFilter === 'partenaires') && (
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-4 mb-8 sm:mb-10">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-full shadow-lg border-2 border-secondary/20">Nos Partenaires</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-secondary via-transparent to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {partenaires.map((photo, index) => (
              <div key={index} onClick={() => setSelectedImage(photo.src)} className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
                <img src={photo.src} alt={photo.title} className="w-full h-56 sm:h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{photo.title}</h3>
                    <p className="text-xs sm:text-sm text-accent">{photo.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}

        {(activeFilter === 'tous' || activeFilter === 'materiel') && (
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-4 mb-8 sm:mb-10">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-full shadow-lg border-2 border-accent/20">Matériel & Équipements</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-accent via-transparent to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {materiel.map((photo, index) => (
              <div key={index} onClick={() => setSelectedImage(photo.src)} className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
                <img src={photo.src} alt={photo.title} className="w-full h-56 sm:h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{photo.title}</h3>
                    <p className="text-xs sm:text-sm text-accent">{photo.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}
      </div>

      {selectedImage && (
        <div onClick={() => setSelectedImage(null)} className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="relative max-w-7xl max-h-full">
            <img src={selectedImage} alt="Image agrandie" className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl" />
            <button className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 backdrop-blur-md transition">
              <span className="text-2xl">×</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
