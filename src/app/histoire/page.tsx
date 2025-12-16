import { Clock, Award, Users, Globe, Building2, Target, Sparkles, TrendingUp } from 'lucide-react';

export default function Histoire() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section avec Background */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Photo Notre Histoire/arrière B.jpg"
            alt="Background Notre Histoire"
            className="w-full h-full object-cover animate-[zoom_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary-800/90 to-slate-900/95"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-semibold tracking-wide">DEPUIS 2017</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Notre <span className="text-accent">Histoire</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto font-light">
            L'Institut Universitaire de Formation aux Métiers de l'Enseignement Supérieur
          </p>
          <div className="mt-8 h-1 w-32 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-primary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            
            {/* Fondation */}
            <div className="relative pl-8 pb-16 border-l-4 border-accent">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-accent rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-bold">27 MARS 2017</span>
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">La Fondation</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  L'Institut Universitaire de Formation aux Métiers de l'Enseignement Supérieur (IUFMES) a été fondé par <strong className="text-primary">Monsieur MEZUI MBA Blondin Marius</strong>, avec une vision claire et ambitieuse.
                </p>
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 border-l-4 border-primary p-4 rounded-r-lg">
                  <p className="text-gray-700 leading-relaxed italic">
                    "Face au déficit d'enseignants qualifiés et à la surcharge des établissements publics, l'IUFMES est né d'une volonté profonde de contribuer au développement éducatif national et d'offrir de meilleures perspectives à la jeunesse."
                  </p>
                </div>
              </div>
            </div>

            {/* Évolution */}
            <div className="relative pl-8 pb-16 border-l-4 border-primary">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
                <h2 className="text-3xl font-bold text-primary mb-6">Évolution et Croissance</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                      <span className="text-accent font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Awoungou</h3>
                      <p className="text-gray-600 text-sm">Premier site d'implantation de l'IUFMES, marquant le début des activités de l'Institut.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                      <span className="text-accent font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">SNI d'Owendo</h3>
                      <p className="text-gray-600 text-sm">Installation dans des locaux propres, établissement pérenne de l'Institut.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl border-2 border-accent/20">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Projet d'Avenir - 2 200 m²</h3>
                      <p className="text-gray-700 text-sm font-medium">Construction en cours d'infrastructures modernes pour renforcer durablement les capacités d'accueil et de formation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="relative pl-8 pb-16 border-l-4 border-secondary">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-secondary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <Target className="w-4 h-4 text-white" />
              </div>
              <div className="bg-gradient-to-br from-primary to-primary-800 text-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-10 h-10 text-accent" />
                  <h2 className="text-3xl font-bold">Notre Mission</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-white/95">
                    Former des professionnels de santé et de l'éducation hautement qualifiés, dotés des compétences techniques et humaines nécessaires pour exceller dans leurs domaines respectifs.
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <p className="leading-relaxed text-white/90">
                      Nous nous engageons à offrir une formation d'excellence alliant rigueur académique, innovation pédagogique et accompagnement personnalisé pour garantir la réussite de chaque étudiant.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Valeurs */}
            <div className="relative pl-8 pb-16 border-l-4 border-accent">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-accent rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Nos Valeurs</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group bg-white rounded-2xl shadow-xl p-6 border-2 border-transparent hover:border-secondary hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">Excellence Académique</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Un corps professoral d'excellence et des programmes conformes aux standards internationaux.
                    </p>
                  </div>
                  <div className="group bg-white rounded-2xl shadow-xl p-6 border-2 border-transparent hover:border-accent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Globe className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">Partenariats Solides</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Des collaborations avec des institutions prestigieuses en Afrique et dans le monde.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Aujourd'hui */}
            <div className="relative pl-8">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-white shadow-lg animate-pulse"></div>
              <div className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300">
                <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                  Aujourd'hui
                  <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full font-normal">En pleine expansion</span>
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  L'IUFMES continue de croître et d'innover, offrant des programmes de formation dans plusieurs domaines clés :
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Filière Santé */}
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border-2 border-primary/20 hover:border-primary/40 transition-all">
                    <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                      Filière Santé
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-lg flex items-center justify-center text-white text-xs font-bold mt-0.5">1</span>
                        <span>Médecine Générale</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-lg flex items-center justify-center text-white text-xs font-bold mt-0.5">2</span>
                        <span>Biologie Médicale</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-lg flex items-center justify-center text-white text-xs font-bold mt-0.5">3</span>
                        <span>Biochimie et Microbiologie</span>
                      </li>
                    </ul>
                  </div>

                  {/* Sciences de l'Éducation */}
                  <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl p-6 border-2 border-secondary/20 hover:border-secondary/40 transition-all">
                    <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                      Sciences de l'Éducation
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="flex-shrink-0 w-6 h-6 bg-secondary rounded-lg flex items-center justify-center text-white text-xs font-bold mt-0.5">1</span>
                        <span>Professeur de Collèges (CAPC)</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="flex-shrink-0 w-6 h-6 bg-secondary rounded-lg flex items-center justify-center text-white text-xs font-bold mt-0.5">2</span>
                        <span>Professeur de Lycées (CAPES)</span>
                      </li>
                    </ul>
                  </div>

                  {/* Sciences et Technologies */}
                  <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl p-6 border-2 border-accent/20 hover:border-accent/40 transition-all">
                    <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                      Sciences et Technologies
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="flex-shrink-0 w-6 h-6 bg-accent rounded-lg flex items-center justify-center text-white text-xs font-bold mt-0.5">1</span>
                        <span>Conception Mécanique Intégrée (CMI)</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="flex-shrink-0 w-6 h-6 bg-accent rounded-lg flex items-center justify-center text-white text-xs font-bold mt-0.5">2</span>
                        <span>Matériaux et Innovation Technologique (MIT)</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="flex-shrink-0 w-6 h-6 bg-accent rounded-lg flex items-center justify-center text-white text-xs font-bold mt-0.5">3</span>
                        <span>Fiabilité et Qualité Industrielle (FQI)</span>
                      </li>
                    </ul>
                  </div>

                  {/* Sciences Juridiques et Économiques */}
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border-2 border-primary/20 hover:border-accent/40 transition-all">
                    <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                      Sciences Juridiques et Économiques
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-lg flex items-center justify-center text-white text-xs font-bold mt-0.5">1</span>
                        <span>Droit (CAPES, Licence, Master)</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-lg flex items-center justify-center text-white text-xs font-bold mt-0.5">2</span>
                        <span>Economie (CAPES, Licence, Master)</span>
                      </li>
                    </ul>
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
