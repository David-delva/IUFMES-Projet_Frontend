import { Globe, ExternalLink } from 'lucide-react';

export default function Partners() {
  const partners = [
    {
      name: 'Université Kofi Annan',
      location: 'Guinée Conakry',
      website: 'edukiya.com',
      url: 'https://edukiya.com/fiche/universite-kofi-annan-de-guinee-ukag-conakry/',
    },
    {
      name: 'Institut Privé de Formation et de Recherches Médicales (IPFORMED)',
      location: 'Sénégal',
      website: 'ipformed.sn',
      url: 'https://ipformed.sn/',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-primary mb-4">
            Nos Partenaires
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Réseau de partenaires académiques en Afrique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="group relative overflow-hidden border-2 border-gray-200 rounded-xl sm:rounded-2xl hover:border-secondary hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-80 sm:h-96"
            >
              {partner.name === 'Université Kofi Annan' ? (
                <>
                  <img 
                    src="/images/Université_Kofi_Annan_de_Guinée_en_2024_06.jpg" 
                    alt="Université Kofi Annan" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-6 lg:p-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                      {partner.name}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-200 mb-4 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-accent" />
                      {partner.location}
                    </p>
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent-400 font-bold text-base sm:text-lg transition bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg w-fit"
                    >
                      <span>{partner.website}</span>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <img 
                    src="/images/Institut%20Priv%C3%A9%20de%20Formation%20et%20de%20Recherches%20M%C3%A9dicales%20(IPFORMED).jpeg" 
                    alt="IPFORMED" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-6 lg:p-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                      {partner.name}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-200 mb-4 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-accent" />
                      {partner.location}
                    </p>
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent-400 font-bold text-base sm:text-lg transition bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg w-fit"
                    >
                      <span>{partner.website}</span>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
