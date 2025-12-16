import { TrendingUp, Users, Award, Building } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: TrendingUp,
      value: '96%',
      label: 'Taux de placement professionnel',
      description: 'Nos diplômés trouvent un emploi dans les 6 mois',
    },
    {
      icon: Users,
      value: '50+',
      label: 'Professeurs experts',
      description: 'Enseignants qualifiés et praticiens actifs',
    },
    {
      icon: Award,
      value: '9 ans',
      label: 'D\'excellence académique',
      description: 'Depuis 2017, formation de qualité reconnue',
    },
    {
      icon: Building,
      value: '8',
      label: 'Campus modernes',
      description: 'Équipements de pointe et infrastructures adaptées',
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden" aria-labelledby="stats-heading">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <img
          src="/images/images_site/stats.jpg"
          alt="Statistiques IUFMES"
          className="w-full h-full object-cover object-[center_68%] brightness-75 animate-[rotate360_60s_linear_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary-700/40 to-primary-800/50"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2 id="stats-heading" className="sr-only">Nos chiffres clés</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all hover:scale-105 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-xl mb-4 group-hover:scale-110 transition-all shadow-lg">
                <stat.icon className="w-8 h-8 text-gray-900" aria-hidden="true" />
              </div>
              
              <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
                {stat.value}
              </div>
              
              <div className="text-lg font-bold text-accent mb-2">
                {stat.label}
              </div>
              
              <p className="text-sm text-gray-200">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
