import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/apropos' },
    { name: 'Nos Produits', href: '/produits' },
    { name: 'Nos Services', href: '/services' },
    { name: 'Actualités', href: '/actualites' },
    { name: 'Contact', href: '/contact' }
  ];

  const productCategories = [
    { name: 'Interrupteurs & Prises', href: '/produits/interrupteurs-prises' },
    { name: 'Domotique MyHOME', href: '/produits/domotique' },
    { name: 'Réseaux & Communication', href: '/produits/reseaux' },
    { name: 'Protection Électrique', href: '/produits/protection' },
    { name: 'Solutions Industrielles', href: '/produits/industriel' },
    { name: 'Câblage & Goulottes', href: '/produits/cablage' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link to="/">
                <img 
                  src="/images/EMH.jpg" 
                  alt="EMH Logo" 
                  className="h-12 sm:h-16 md:h-20 w-auto mb-4 bg-white p-2 rounded"
                />
              </Link>
              <h3 className="text-xl font-bold mb-2">EMH</h3>
              <p className="text-red-400 font-semibold mb-4">Distributeur Officiel Legrand</p>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Votre partenaire de confiance pour tous vos besoins en solutions électriques, 
              domotiques et de réseaux depuis plus de 20 ans.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/emh.tn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/emh-tn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-red-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nos Produits</h4>
            <ul className="space-y-3">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <Link
                    to={category.href}
                    className="text-gray-300 hover:text-red-400 transition-colors duration-300 text-sm"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Rond point Globe Terrestre Route de ceinture</p>
                  <p>4081-Zaouiet Sousse</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-400 flex-shrink-0" />
                <a
                  href="tel:+216xxxxxxx"
                  className="text-gray-300 hover:text-red-400 transition-colors duration-300 text-sm"
                >
                  +216 xxxxxxxx
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-400 flex-shrink-0" />
                <a
                  href="mailto:contact@emh.tn"
                  className="text-gray-300 hover:text-red-400 transition-colors duration-300 text-sm"
                >
                  contact@emh.tn
                </a>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold text-red-400 mb-2">Horaires d'Ouverture</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Lun - Ven: 8h00 - 17h30</p>
                <p>Samedi: 8h00 - 12h00</p>
                <p>Dimanche: Fermé</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legrand Partnership */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="text-sm text-gray-300">
                <span className="font-semibold text-red-400">Partenaire Officiel:</span>
              </div>
              <a
                href="https://www.legrand.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors duration-300"
              >
                <span className="font-semibold">Legrand France</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            
            <div className="text-sm text-gray-400">
              Certifié et agréé par Legrand pour la distribution en Tunisie
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} EMH - Établissement Mohamed Hertilli. Tous droits réservés.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a
                href="/mentions-legales"
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
              >
                Mentions Légales
              </a>
              <a
                href="/politique-confidentialite"
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
              >
                Politique de Confidentialité
              </a>
              <a
                href="/cgv"
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
              >
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;