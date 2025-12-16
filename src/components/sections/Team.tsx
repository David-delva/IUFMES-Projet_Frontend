import { Users, GraduationCap, FileText, DollarSign, Package, Calendar, ClipboardCheck, Stethoscope } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    { name: 'MEZUI MBA Blondin Marius', role: 'Président-Directeur', icon: Users, color: 'primary' },
    { name: 'Pr MBA AKI / Dr OBAME', role: 'Equipe pédagogique', icon: GraduationCap, color: 'secondary' },
    { name: 'Pr BAYONNE / Pr OVONO', role: 'Conseil scientifique', icon: GraduationCap, color: 'secondary' },
    { name: 'Mme KOUSSOU KOUSSOU Alix', role: 'Secrétariat du Président', icon: Users, color: 'secondary' },
    { name: 'Pr MBA AKI Tatiana', role: 'President du Conseil pédagogique', icon: GraduationCap, color: 'accent' },
    { name: 'Pr NNANG ESSONO Jean Fidèle', role: 'Responsable des cours', icon: Calendar, color: 'accent' },
    { name: 'Dr EZINAH Florence', role: 'Responsable des Examens', icon: ClipboardCheck, color: 'accent' },
    { name: 'Dr OBAME NGWA Charles', role: 'Responsables des stages cliniques', icon: Stethoscope, color: 'accent' },
    { name: 'Mme MENDOME Natacha', role: 'Gestionnaire/comptable', icon: DollarSign, color: 'gray' },
    { name: 'M. MVET OBIANG Dieumerci', role: 'Secrétaire général', icon: FileText, color: 'gray' },
    { name: 'Mme YEBE Celia', role: 'Scolarité', icon: Package, color: 'gray' },
    { name: 'Mme BISSIE Armelle', role: 'Service Communication', icon: Users, color: 'gray' },
    { name: 'M. ESSONO NDANG', role: 'Logistique', icon: Package, color: 'gray' },
  ];

  return (
    <section id="team" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-accent/5"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-4">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">Notre équipe</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-3 sm:mb-4">
            L'Équipe Dirigeante
          </h2>
          <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Des experts dévoués à l'excellence académique
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            const isPresident = index === 0;
            const colorClasses = {
              primary: 'from-primary/10 to-primary/5 border-primary/30',
              secondary: 'from-secondary/10 to-secondary/5 border-secondary/30',
              gray: 'from-gray-50 to-white border-gray-200',
              accent: 'from-accent/10 to-accent/5 border-accent/30',
            };
            const iconBgClasses = {
              primary: 'bg-gradient-to-br from-primary to-primary-800',
              secondary: 'bg-gradient-to-br from-secondary to-secondary-700',
              gray: 'bg-gradient-to-br from-gray-100 to-gray-200',
              accent: 'bg-gradient-to-br from-accent to-accent-600',
            };
            const iconColorClasses = {
              primary: 'text-white',
              secondary: 'text-white',
              gray: 'text-gray-700',
              accent: 'text-gray-900',
            };

            return (
              <div
                key={index}
                className={`${isPresident ? 'sm:col-span-2 lg:col-span-3 xl:col-span-4 max-w-2xl mx-auto' : ''} group bg-gradient-to-br ${colorClasses[member.color as keyof typeof colorClasses]} border-2 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`flex-shrink-0 ${isPresident ? 'w-16 h-16 sm:w-20 sm:h-20' : 'w-12 h-12 sm:w-14 sm:h-14'} ${iconBgClasses[member.color as keyof typeof iconBgClasses]} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className={`${isPresident ? 'w-9 h-9 sm:w-11 sm:h-11' : 'w-6 h-6 sm:w-7 sm:h-7'} ${iconColorClasses[member.color as keyof typeof iconColorClasses]}`} />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className={`${isPresident ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'} font-semibold text-gray-500 uppercase tracking-wide mb-1`}>
                      {member.role}
                    </h3>
                    <p className={`${isPresident ? 'text-lg sm:text-xl lg:text-2xl' : 'text-sm sm:text-base'} font-bold text-gray-900 leading-tight`}>
                      {member.name}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
