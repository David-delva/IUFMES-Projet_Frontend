import { Building2, MapPin } from 'lucide-react';

export default function Stages() {
  const stages = [
    {
      name: 'Centre Hospitalier Universitaire de Franceville',
      location: 'Franceville, Gabon',
      image: '/images/CHU de franceville.jpeg',
    },
    {
      name: 'Centre Hospitalier Régional de MELEN',
      location: 'Melen, Gabon',
      image: '/images/CHU Melen.jpeg',
    },
    {
      name: 'HÔPITAL DE LA COOPÉRATION SINO-GABONAISE',
      location: 'Libreville, Gabon',
      image: '/images/hopital sino_Gabon.jpeg',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 relative">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/photo_stages/stages.png"
          alt="Background stages"
          className="w-full h-full object-cover opacity-30 animate-[zoom_20s_ease-in-out_infinite_alternate]"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-3 sm:mb-4 px-2">
            Nos Lieux de Stages
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Partenariats avec des établissements de santé de référence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {stages.map((stage, i) => (
            <div
              key={i}
              className="group bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden hover:border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {stage.image && (
                <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden">
                  <img
                    src={stage.image}
                    alt={stage.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              )}
              <div className="p-5 sm:p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Building2 className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 leading-tight">
                      {stage.name}
                    </h3>
                    <p className="flex items-center gap-2 text-base sm:text-lg text-gray-600 font-medium">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0" />
                      {stage.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
