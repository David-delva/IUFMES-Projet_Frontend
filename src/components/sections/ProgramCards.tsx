import Link from 'next/link';
import { Stethoscope, GraduationCap, Cog, ArrowRight, Download } from 'lucide-react';

export default function ProgramCards() {
  const programs = [
    {
      name: 'Filière Santé',
      icon: Stethoscope,
      items: ['Médecine Générale', 'Biologie Médicale', 'Biochimie et Microbiologie'],
      color: 'from-primary to-primary-800',
      image: '/images/image_program/Maison-de-la-sante-500.jpg',
    },
    {
      name: 'Sciences de l\'Education',
      icon: GraduationCap,
      items: ['Professeur de Collèges', 'Professeur de Lycées'],
      color: 'from-secondary to-secondary-700',
      image: '/images/image_program/education-large.jpg',
    },
    {
      name: 'Sciences et Technologies',
      icon: Cog,
      items: ['Conception Mécanique Intégrée (CMI)', 'Matériaux et Innovation Technologique (MIT)', 'Fiabilité et Qualité Industrielle (FQI)'],
      color: 'from-accent to-accent-600',
      image: '/images/image_program/Technology-.png',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white" aria-labelledby="programs-heading">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 id="programs-heading" className="text-4xl sm:text-5xl font-extrabold text-primary mb-4">
            Nos Filières en Vedette
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
             Découvrez nos programmes d'excellence conçus pour former les professionnels de demain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <article
                key={index}
                className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                {/* Bordure animée */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl p-[3px]">
                  <div className="w-full h-full bg-white rounded-2xl sm:rounded-3xl"></div>
                </div>
                
                <div className="relative">
                  <div className="relative h-80 sm:h-96 lg:h-[28rem] overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                    {/* Effet de brillance */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20"></div>
                    
                    <img
                      src={program.image}
                      alt={program.name}
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                    />
                    
                    {/* Overlay avec motif */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity" style={{backgroundImage: 'linear-gradient(45deg, #00337a 25%, transparent 25%, transparent 75%, #00337a 75%), linear-gradient(45deg, #00337a 25%, transparent 25%, transparent 75%, #00337a 75%)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px'}}></div>
                    
                    {/* Badge numéro */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-accent/90 backdrop-blur-sm rounded-xl flex items-center justify-center border-2 border-white/30 shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-primary font-bold text-xl">{index + 1}</span>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-8 z-10">
                      <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-accent to-accent-600 rounded-2xl mb-3 sm:mb-4 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-4 border-white/20">
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900" aria-hidden="true" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                        {program.name}
                      </h3>
                      <div className="h-1 w-20 bg-gradient-to-r from-accent to-transparent rounded-full group-hover:w-32 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-white">
                  <ul className="space-y-3 sm:space-y-4">
                    {program.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700 group/item">
                        <span className="w-2.5 h-2.5 bg-gradient-to-br from-accent to-secondary rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                        <span className="font-semibold text-base sm:text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link
            href="/programs"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Voir toutes nos filières
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
          <a
            href="/pdf/formulaire d'inscription.pdf"
            download
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-600 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Télécharger le formulaire
          </a>
        </div>
      </div>
    </section>
  );
}
