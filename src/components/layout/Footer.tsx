import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

/**
 * Footer Component - Structure en 4 colonnes
 * - Fond en couleur primaire (#004080) avec texte clair (contraste WCAG AA)
 * - Navigation, Filières, Contact, Réseaux sociaux
 * - Mentions légales
 */
export default function Footer() {
  return (
    <footer className="bg-primary text-white" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        {/* Grille 4 colonnes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Colonne 1: Navigation */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.jpg"
                alt="Logo IUFMES"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="font-bold text-lg">IUFMES</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Institut Universitaire de Formation aux Métiers de l'Éducation et de la Santé
            </p>
            <nav aria-label="Navigation footer">
              <ul className="space-y-2 text-sm">
                <li><Link href="/#about" className="text-gray-300 hover:text-accent transition">À propos</Link></li>
                <li><Link href="/#programs" className="text-gray-300 hover:text-accent transition">Nos filières</Link></li>
                <li><Link href="/#team" className="text-gray-300 hover:text-accent transition">Notre équipe</Link></li>
              </ul>
            </nav>
          </div>

          {/* Colonne 2: Filières Populaires */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary">Filières Populaires</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/programs/medecine" className="hover:text-accent transition">Médecine Générale</Link></li>
              <li><Link href="/programs/nursing" className="hover:text-accent transition">Sciences Infirmières</Link></li>
              <li><Link href="/programs/pharmacy" className="hover:text-accent transition">Pharmacie Clinique</Link></li>
              <li><Link href="/programs/physio" className="hover:text-accent transition">Kinésithérapie</Link></li>
            </ul>
          </div>

          {/* Colonne 3: Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary">Contact</h3>
            <address className="not-italic space-y-3 text-sm text-gray-300">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" aria-hidden="true" />
                <a href="tel:065898997" className="hover:text-accent transition">065 89 89 97</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" aria-hidden="true" />
                <a href="mailto:infoupelite@gmail.com" className="hover:text-accent transition">infoupelite@gmail.com</a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" aria-hidden="true" />
                <span>Owendo-SNI, BP 2039 Libreville, Gabon</span>
              </p>
            </address>
          </div>

          {/* Colonne 4: Réseaux Sociaux */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary">Suivez-nous</h3>
            <div className="flex gap-4 mb-4">
              <a href="https://www.facebook.com/IUFMES" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-white/10 hover:bg-accent p-2 rounded-lg transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="bg-white/10 hover:bg-accent p-2 rounded-lg transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-white/10 hover:bg-accent p-2 rounded-lg transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-white/10 hover:bg-accent p-2 rounded-lg transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-gray-400">
              Horaires d'ouverture :<br />
              Lun - Ven: 8h - 18h<br />
              Sam: 9h - 13h
            </p>
          </div>
        </div>

        {/* Mentions légales */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2024 IUFMES. Tous droits réservés. | 
            <Link href="/mentions-legales" className="hover:text-accent transition ml-2">Mentions légales</Link> | 
            <Link href="/politique-confidentialite" className="hover:text-accent transition ml-2">Politique de confidentialité</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
