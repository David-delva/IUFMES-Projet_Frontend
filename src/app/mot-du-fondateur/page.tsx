export default function MotDuFondateur() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary mb-4">
            Mot du Fondateur
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 bg-gradient-to-br from-primary to-primary-800 p-8 flex flex-col items-center justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-accent shadow-2xl mb-6">
                  <img 
                    src="/images/photo_fondateur.jpg" 
                    alt="Fondateur IUFMES" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-white text-center mb-2">MEZUI MBA Blondin Marius</h2>
                <p className="text-accent font-semibold text-center">Président-Directeur Général</p>
              </div>

              <div className="md:col-span-3 p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Notre choix de fonder un établissement d'enseignement supérieur est l'expression d'une volonté citoyenne de renforcer l'action pédagogique au GABON et y créer un pôle d'enseignement orienté vers l'excellence. Nous voulons ainsi voir nos étudiants bénéficier d'un enseignement de qualité fondé sur les fondamentaux que partagent toutes les forces vives de notre société, à savoir :
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl border-l-4 border-accent">
                      <span className="text-2xl text-accent">•</span>
                      <p className="text-gray-700">assurer à nos étudiants un espace pédagogique agréable, qui leur permettra de s'épanouir dans les meilleures conditions;</p>
                    </div>
                    <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl border-l-4 border-accent">
                      <span className="text-2xl text-accent">•</span>
                      <p className="text-gray-700">mettre en place un système de suivi régulier et rapproché de l'évolution des apprentissages des étudiants;</p>
                    </div>
                    <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl border-l-4 border-accent">
                      <span className="text-2xl text-accent">•</span>
                      <p className="text-gray-700">développer l'éveil scientifique et la curiosité intellectuelle des étudiants, ainsi que le goût de l'effort, de la rigueur scientifique et de l'esprit critique;</p>
                    </div>
                    <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl border-l-4 border-accent">
                      <span className="text-2xl text-accent">•</span>
                      <p className="text-gray-700">avec la création de l'Association sportive et culturelle, ELITE Olympique, développer des activités sportives et récréatives pour permettre à nos étudiants de découvrir le Gabon.</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-xl border border-primary/10">
                    <p className="text-gray-700 leading-relaxed italic">
                      Notre souci permanent est de doter notre Institut universitaire, d'un personnel pédagogique professionnel, compétent et ouvert au renouveau pédagogique susceptible d'insuffler à son action un élan sans cesse renouvelé. Notre réussite, nous la devons à l'amour du métier, au professionnalisme de nos personnels d'enseignement et d'encadrement, à leur dévouement et abnégation et la culture de rigueur et de challenge que partagent toutes les composantes de notre groupe. Enfin, la confiance des parents des étudiants est une fierté que nous entretenons jalousement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
