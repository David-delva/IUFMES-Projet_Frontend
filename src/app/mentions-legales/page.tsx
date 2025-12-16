import { Scale, Building, Mail, Phone } from 'lucide-react';

export default function MentionsLegalesPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
              <Scale className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-extrabold text-primary">Mentions Légales</h1>
          </div>

          <div className="space-y-8 text-gray-700">
            {/* Éditeur */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                <Building className="w-6 h-6" />
                Éditeur du site
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 space-y-2">
                <p><strong>Raison sociale :</strong> Institut Universitaire de Formation aux Métiers de l'Éducation et de la Santé (IUFMES)</p>
                <p><strong>Forme juridique :</strong> Établissement d'enseignement supérieur privé</p>
                <p><strong>Siège social :</strong> Owendo-SNI, BP 2039, Libreville, Gabon</p>
                <p><strong>Président-Fondateur :</strong> M. MEZUI MBA Blondin Marius</p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Contact</h2>
              <div className="space-y-3">
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-secondary" />
                  <strong>Téléphone :</strong> 065 89 89 97
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-secondary" />
                  <strong>Email :</strong> infoupelite@gmail.com
                </p>
              </div>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Hébergement</h2>
              <p>Ce site est hébergé par Vercel Inc.</p>
              <p className="text-sm text-gray-600 mt-2">
                340 S Lemon Ave #4133, Walnut, CA 91789, USA
              </p>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Propriété intellectuelle</h2>
              <p className="leading-relaxed">
                L'ensemble du contenu de ce site (textes, images, logos, vidéos) est la propriété exclusive de l'IUFMES, 
                sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation préalable est interdite 
                et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
              </p>
            </section>

            {/* Données personnelles */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Protection des données personnelles</h2>
              <p className="leading-relaxed">
                Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de rectification et de suppression 
                des données vous concernant. Pour exercer ce droit, veuillez nous contacter à l'adresse : infoupelite@gmail.com
              </p>
              <p className="mt-4">
                Pour plus d'informations, consultez notre{' '}
                <a href="/politique-confidentialite" className="text-secondary hover:underline font-semibold">
                  Politique de confidentialité
                </a>
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Cookies</h2>
              <p className="leading-relaxed">
                Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire 
                ou de tracking n'est utilisé sans votre consentement préalable.
              </p>
            </section>

            {/* Crédits */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Crédits</h2>
              <p className="leading-relaxed">
                Conception et développement : IUFMES<br />
                Photographies : IUFMES / Banques d'images libres de droits<br />
                Icônes : Lucide React
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>Dernière mise à jour : Janvier 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
