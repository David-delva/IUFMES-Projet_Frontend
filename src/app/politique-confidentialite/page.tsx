import { Shield, Lock, Eye, Database, UserCheck } from 'lucide-react';

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-secondary" />
            </div>
            <h1 className="text-4xl font-extrabold text-primary">Politique de Confidentialité</h1>
          </div>

          <div className="space-y-8 text-gray-700">
            {/* Introduction */}
            <section>
              <p className="text-lg leading-relaxed">
                L'IUFMES s'engage à protéger la confidentialité et la sécurité de vos données personnelles. 
                Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
              </p>
            </section>

            {/* Données collectées */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                <Database className="w-6 h-6" />
                Données collectées
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="mb-4">Nous collectons les données suivantes :</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>Données d'identité :</strong> nom, prénom, date de naissance</li>
                  <li><strong>Données de contact :</strong> adresse email, numéro de téléphone, adresse postale</li>
                  <li><strong>Données académiques :</strong> diplômes, relevés de notes, parcours scolaire</li>
                  <li><strong>Données de connexion :</strong> adresse IP, logs de connexion (pour les comptes admin)</li>
                </ul>
              </div>
            </section>

            {/* Finalités */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6" />
                Utilisation des données
              </h2>
              <p className="mb-4">Vos données sont utilisées pour :</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-xl p-4">
                  <p className="font-semibold text-primary mb-2">✓ Gestion des inscriptions</p>
                  <p className="text-sm">Traitement de votre dossier d'admission</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-4">
                  <p className="font-semibold text-primary mb-2">✓ Communication</p>
                  <p className="text-sm">Réponse à vos demandes de contact</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-4">
                  <p className="font-semibold text-primary mb-2">✓ Suivi pédagogique</p>
                  <p className="text-sm">Accompagnement durant votre formation</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-4">
                  <p className="font-semibold text-primary mb-2">✓ Amélioration des services</p>
                  <p className="text-sm">Optimisation de nos programmes</p>
                </div>
              </div>
            </section>

            {/* Base légale */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Base légale du traitement</h2>
              <p className="leading-relaxed">
                Le traitement de vos données repose sur :
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside">
                <li>Votre consentement lors de la soumission du formulaire de contact</li>
                <li>L'exécution du contrat d'inscription</li>
                <li>Le respect d'obligations légales (archivage des dossiers académiques)</li>
              </ul>
            </section>

            {/* Sécurité */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6" />
                Sécurité des données
              </h2>
              <div className="bg-secondary/5 rounded-xl p-6">
                <p className="mb-4">Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles :</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Chiffrement des données sensibles (mots de passe avec Bcrypt)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Connexions sécurisées HTTPS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Accès restreint aux données (authentification JWT)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Sauvegardes régulières</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Durée de conservation */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Durée de conservation</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="p-3 text-left">Type de données</th>
                      <th className="p-3 text-left">Durée</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-50">
                    <tr className="border-b">
                      <td className="p-3">Dossiers d'inscription</td>
                      <td className="p-3">Durée de la scolarité + 5 ans</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Messages de contact</td>
                      <td className="p-3">3 ans maximum</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Logs de connexion</td>
                      <td className="p-3">1 an</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Vos droits */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                <UserCheck className="w-6 h-6" />
                Vos droits
              </h2>
              <p className="mb-4">Vous disposez des droits suivants :</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Droit d\'accès', desc: 'Obtenir une copie de vos données' },
                  { title: 'Droit de rectification', desc: 'Corriger vos informations' },
                  { title: 'Droit à l\'effacement', desc: 'Supprimer vos données' },
                  { title: 'Droit d\'opposition', desc: 'Refuser certains traitements' },
                ].map((right, i) => (
                  <div key={i} className="bg-accent/10 rounded-xl p-4 border-2 border-accent/30">
                    <p className="font-bold text-primary mb-1">{right.title}</p>
                    <p className="text-sm text-gray-600">{right.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-primary/5 rounded-xl p-6">
                <p className="font-semibold mb-2">Pour exercer vos droits :</p>
                <p>Envoyez un email à <a href="mailto:infoupelite@gmail.com" className="text-secondary hover:underline font-bold">infoupelite@gmail.com</a></p>
                <p className="text-sm text-gray-600 mt-2">Nous vous répondrons dans un délai de 30 jours maximum.</p>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Cookies</h2>
              <p className="leading-relaxed">
                Nous utilisons uniquement des cookies techniques essentiels au fonctionnement du site 
                (authentification admin). Aucun cookie publicitaire ou de tracking tiers n'est déposé.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Contact</h2>
              <p className="leading-relaxed">
                Pour toute question concernant cette politique de confidentialité, contactez-nous :
              </p>
              <div className="mt-4 bg-gray-50 rounded-xl p-6">
                <p><strong>Email :</strong> infoupelite@gmail.com</p>
                <p><strong>Téléphone :</strong> 065 89 89 97</p>
                <p><strong>Adresse :</strong> Owendo-SNI, BP 2039, Libreville, Gabon</p>
              </div>
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
