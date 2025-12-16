import { FileText, CheckCircle } from 'lucide-react';

/**
 * Admissions Section - Tarifs et pièces à fournir
 * - Deux filières : Santé et Professorat
 * - Tableaux de tarifs par niveau
 * - Liste des documents requis
 */
export default function Admissions() {
  return (
    <section id="admissions" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Admissions & Tarifs/Admissions & Tarifs.jpeg"
          alt="Background Admissions"
          className="w-full h-full object-cover opacity-60 animate-[zoom_20s_ease-in-out_infinite_alternate]"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-3 sm:mb-4">
            Admissions & Tarifs
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Informations sur les frais de scolarité et documents requis
          </p>
        </div>

        <div className="text-center mb-6 sm:mb-8">
          <a
            href="/pdf/formulaire d'inscription.pdf"
            download
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-600 text-gray-900 px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-lg transition-all shadow-lg hover:shadow-xl"
          >
            <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Télécharger le formulaire d'inscription</span>
            <span className="sm:hidden">Formulaire d'inscription</span>
          </a>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {/* FILIÈRE SANTÉ */}
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-gray-200">
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              Filière Santé
            </h3>

            <div className="mb-4 sm:mb-6">
              <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-secondary">Programmes</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                {['Médecine Générale', 'Biologie Médicale', 'Biochimie et Microbiologie'].map((prog, i) => (
                  <div key={i} className="bg-white rounded-lg p-2 sm:p-3 text-center border border-gray-200">
                    <p className="font-semibold text-primary text-xs sm:text-sm">{prog}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
              <table className="w-full text-xs border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-2 text-left whitespace-nowrap">Année</th>
                    <th className="p-2 text-right whitespace-nowrap">Frais Scolaire</th>
                    <th className="p-2 text-right whitespace-nowrap">Inscription</th>
                    <th className="p-2 text-right whitespace-nowrap">1ère Tranche</th>
                    <th className="p-2 text-right whitespace-nowrap">2è Tranche</th>
                    <th className="p-2 text-right whitespace-nowrap">3è Tranche</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b">
                    <td className="p-2 font-medium">1ère</td>
                    <td className="p-2 text-right">1 300 000</td>
                    <td className="p-2 text-right">300 000</td>
                    <td className="p-2 text-right">350 000</td>
                    <td className="p-2 text-right">350 000</td>
                    <td className="p-2 text-right">300 000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">2è</td>
                    <td className="p-2 text-right">1 300 000</td>
                    <td className="p-2 text-right">300 000</td>
                    <td className="p-2 text-right">350 000</td>
                    <td className="p-2 text-right">350 000</td>
                    <td className="p-2 text-right">300 000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">3è</td>
                    <td className="p-2 text-right">1 500 000</td>
                    <td className="p-2 text-right">400 000</td>
                    <td className="p-2 text-right">400 000</td>
                    <td className="p-2 text-right">400 000</td>
                    <td className="p-2 text-right">300 000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">4è</td>
                    <td className="p-2 text-right">1 700 000</td>
                    <td className="p-2 text-right">500 000</td>
                    <td className="p-2 text-right">400 000</td>
                    <td className="p-2 text-right">400 000</td>
                    <td className="p-2 text-right">400 000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">5è</td>
                    <td className="p-2 text-right">1 700 000</td>
                    <td className="p-2 text-right">500 000</td>
                    <td className="p-2 text-right">400 000</td>
                    <td className="p-2 text-right">400 000</td>
                    <td className="p-2 text-right">400 000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">6è</td>
                    <td className="p-2 text-right">2 400 000</td>
                    <td className="p-2 text-right">600 000</td>
                    <td className="p-2 text-right">600 000</td>
                    <td className="p-2 text-right">600 000</td>
                    <td className="p-2 text-right">600 000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">7è</td>
                    <td className="p-2 text-right">2 400 000</td>
                    <td className="p-2 text-right">600 000</td>
                    <td className="p-2 text-right">600 000</td>
                    <td className="p-2 text-right">600 000</td>
                    <td className="p-2 text-right">600 000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SCIENCES DE L'ÉDUCATION */}
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-gray-200">
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              Sciences de l'Éducation
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Formation dans les Métiers de l'Enseignement, de l'Éducation et de la Formation</p>
            <p className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Professeur de Collèges • Professeur de Lycées</p>

            <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
              <table className="w-full text-xs sm:text-sm border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="p-2 text-left whitespace-nowrap">Formation</th>
                    <th className="p-2 text-right whitespace-nowrap">Frais Total</th>
                    <th className="p-2 text-right whitespace-nowrap">Inscription</th>
                    <th className="p-2 text-right whitespace-nowrap">2è Tranche</th>
                    <th className="p-2 text-right whitespace-nowrap">3è Tranche</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b">
                    <td className="p-2 font-medium">Licence 1 & Licence 2</td>
                    <td className="p-2 text-right">950 000</td>
                    <td className="p-2 text-right">400 000</td>
                    <td className="p-2 text-right">300 000</td>
                    <td className="p-2 text-right">250 000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Licence 3</td>
                    <td className="p-2 text-right">950 000</td>
                    <td className="p-2 text-right">400 000</td>
                    <td className="p-2 text-right">300 000</td>
                    <td className="p-2 text-right">250 000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Master 1</td>
                    <td className="p-2 text-right">1 250 000</td>
                    <td className="p-2 text-right">450 000</td>
                    <td className="p-2 text-right">450 000</td>
                    <td className="p-2 text-right">350 000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Master 2</td>
                    <td className="p-2 text-right">1 250 000</td>
                    <td className="p-2 text-right">450 000</td>
                    <td className="p-2 text-right">450 000</td>
                    <td className="p-2 text-right">350 000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SCIENCES ET TECHNOLOGIES */}
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-gray-200">
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
              </div>
              Sciences et Technologies
            </h3>

            <div className="mb-4 sm:mb-6">
              <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-secondary">Spécialités</h4>
              <div className="space-y-2 text-xs sm:text-sm">
                {[
                  'Conception Mécanique Intégrée (CMI)',
                  'Matériaux et Innovation Technologique (MIT)',
                  'Fiabilité et Qualité Industrielle (FQI)'
                ].map((spec, i) => (
                  <div key={i} className="bg-white rounded-lg p-2 sm:p-3 border border-gray-200">
                    <p className="font-semibold text-primary text-xs sm:text-sm">{spec}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
              <table className="w-full text-xs sm:text-sm border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-accent text-gray-900">
                    <th className="p-2 text-left whitespace-nowrap">Formation</th>
                    <th className="p-2 text-right whitespace-nowrap">Frais Total</th>
                    <th className="p-2 text-right whitespace-nowrap">Inscription</th>
                    <th className="p-2 text-right whitespace-nowrap">2è Tranche</th>
                    <th className="p-2 text-right whitespace-nowrap">3è Tranche</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b">
                    <td className="p-2 font-medium">Licence 1 & Licence 2</td>
                    <td className="p-2 text-right">950 000</td>
                    <td className="p-2 text-right">300 000</td>
                    <td className="p-2 text-right">400 000</td>
                    <td className="p-2 text-right">250 000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Licence 3</td>
                    <td className="p-2 text-right">1 100 000</td>
                    <td className="p-2 text-right">400 000</td>
                    <td className="p-2 text-right">400 000</td>
                    <td className="p-2 text-right">300 000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Master 1</td>
                    <td className="p-2 text-right">1 500 000</td>
                    <td className="p-2 text-right">500 000</td>
                    <td className="p-2 text-right">600 000</td>
                    <td className="p-2 text-right">400 000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Master 2</td>
                    <td className="p-2 text-right">1 500 000</td>
                    <td className="p-2 text-right">500 000</td>
                    <td className="p-2 text-right">600 000</td>
                    <td className="p-2 text-right">400 000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* PROPÉDIE */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-primary/30">
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">Propédie</h3>
            <p className="text-xs sm:text-sm text-gray-700 mb-2 sm:mb-4">Détenteur d'une Licence ou d'un Master</p>
            <p className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Programme de Pédagogie et de Didactique des Enseignants</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                <p className="text-xs text-gray-600 mb-1">Durée</p>
                <p className="text-xl sm:text-2xl font-bold text-primary">1 AN</p>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                <p className="text-xs text-gray-600 mb-1">Coût</p>
                <p className="text-xl sm:text-2xl font-bold text-secondary">650 000 FCFA</p>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                <p className="text-xs text-gray-600 mb-1">Diplômes</p>
                <p className="text-base sm:text-lg font-bold text-accent">CAPC, CAPES</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
