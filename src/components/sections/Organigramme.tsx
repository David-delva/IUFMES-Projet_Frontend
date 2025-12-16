import { Users, GraduationCap, FileText, DollarSign, Package, Calendar, ClipboardCheck, Stethoscope } from 'lucide-react';

export default function Organigramme() {
  return (
    <div className="min-h-screen relative py-12 sm:py-16 lg:py-24 overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <img
          src="/images/images_site/organigramme-structure-bureau.png"
          alt="Structure IUFMES"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* En-tête */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 text-white drop-shadow-lg px-4">
            Organigramme IUFMES
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto drop-shadow px-4">
            Structure organisationnelle et équipe dirigeante
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
          {/* Président */}
          <div className="flex justify-center">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl w-full max-w-2xl border-l-4 border-primary">
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-primary rounded-lg flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-base font-semibold text-gray-500 uppercase tracking-wide mb-1">Président-Directeur</h3>
                  <p className="text-2xl font-bold text-primary">MEZUI MBA Blondin Marius</p>
                </div>
              </div>
            </div>
          </div>

          {/* Niveau 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-xl border-l-4 border-secondary">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 sm:w-9 sm:h-9 text-secondary" />
                </div>
                <div className="text-left">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase mb-1">Conseil scientifique</h3>
                  <p className="text-sm sm:text-base font-bold text-gray-900">Pr BAYONNE</p>
                </div>
              </div>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-xl border-l-4 border-secondary">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-7 h-7 sm:w-9 sm:h-9 text-secondary" />
                </div>
                <div className="text-left">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase mb-1">Secrétaire général</h3>
                  <p className="text-sm sm:text-base font-bold text-gray-900">M. MVET OBIANG Dieumerci</p>
                </div>
              </div>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-xl border-l-4 border-secondary">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-7 h-7 sm:w-9 sm:h-9 text-secondary" />
                </div>
                <div className="text-left">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase mb-1">Secrétariat Président</h3>
                  <p className="text-sm sm:text-base font-bold text-gray-900">Mme KOUSSOU KOUSSOU Alix</p>
                </div>
              </div>
            </div>
          </div>

          {/* Niveau 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 sm:p-5 shadow-lg border-l-4 border-gray-400">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-500 mb-1">Gestionnaire/comptable</h3>
                  <p className="text-sm sm:text-base font-medium text-gray-900">Mme MENDOME Natacha</p>
                </div>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 sm:p-5 shadow-lg border-l-4 border-gray-400">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-500 mb-1">Logistique</h3>
                  <p className="text-sm sm:text-base font-medium text-gray-900">Mme YEBE Celia</p>
                </div>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 sm:p-5 shadow-lg border-l-4 border-gray-400">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-500 mb-1">Dir. Affaires financières</h3>
                  <p className="text-sm sm:text-base font-medium text-gray-900">M. NKOMO ESSA Vincent</p>
                </div>
              </div>
            </div>
          </div>

          {/* Direction académique */}
          <div className="flex justify-center">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 shadow-2xl w-full max-w-2xl border-l-4 border-accent">
              <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-accent rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gray-900" />
                </div>
                <div className="text-left">
                  <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-500 uppercase tracking-wide mb-1">Directeur académique</h3>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-accent">Pr MBA AKI Tatiana</p>
                </div>
              </div>
            </div>
          </div>

          {/* Niveau académique */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 sm:p-5 shadow-lg border-l-4 border-accent/60">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                </div>
                <div className="text-left">
                  <h3 className="text-xs font-semibold text-gray-500 mb-1">Resp. des cours</h3>
                  <p className="text-xs sm:text-sm font-medium text-gray-900">Pr NNANG ESSONO J.F.</p>
                </div>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-5 shadow-lg border-l-4 border-accent/60">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-accent" />
                </div>
                <div className="text-left">
                  <h3 className="text-xs font-semibold text-gray-500 mb-1">Conseil pédagogique</h3>
                  <p className="text-sm font-medium text-gray-900">Pr MBA AKI</p>
                </div>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-5 shadow-lg border-l-4 border-accent/60">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <ClipboardCheck className="w-7 h-7 text-accent" />
                </div>
                <div className="text-left">
                  <h3 className="text-xs font-semibold text-gray-500 mb-1">Resp. Examens</h3>
                  <p className="text-sm font-medium text-gray-900">Dr EZINAH Florence</p>
                </div>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-5 shadow-lg border-l-4 border-accent/60">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-7 h-7 text-accent" />
                </div>
                <div className="text-left">
                  <h3 className="text-xs font-semibold text-gray-500 mb-1">Resp. stages cliniques</h3>
                  <p className="text-sm font-medium text-gray-900">Dr OBAME NGWA Charles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
