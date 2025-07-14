import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone, Mail } from 'lucide-react';

const ServiceDetail = () => {
  const { service } = useParams();

  const serviceData: { [key: string]: any } = {
    'domotique': {
      title: 'Installation Domotique',
      description: 'Transformez votre habitat en maison intelligente avec nos solutions domotiques MyHOME de Legrand.',
      hero: 'https://images.pexels.com/photos/8092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      features: [
        'Éclairage automatisé et programmable',
        'Contrôle des volets et stores',
        'Gestion du chauffage et climatisation',
        'Système de sécurité intégré',
        'Contrôle à distance via smartphone',
        'Programmation de scénarios',
        'Économies d\'énergie optimisées',
        'Interface utilisateur intuitive'
      ],
      process: [
        {
          title: 'Étude Personnalisée',
          description: 'Analyse de vos besoins et visite technique de votre habitation'
        },
        {
          title: 'Conception du Système',
          description: 'Élaboration du plan domotique adapté à votre mode de vie'
        },
        {
          title: 'Installation',
          description: 'Pose et configuration des équipements par nos techniciens certifiés'
        },
        {
          title: 'Formation',
          description: 'Formation complète à l\'utilisation de votre système domotique'
        }
      ],
      equipment: [
        'Centrale MyHOME Server',
        'Écrans tactiles de contrôle',
        'Modules d\'éclairage connectés',
        'Détecteurs de mouvement',
        'Thermostats intelligents',
        'Prises et interrupteurs connectés'
      ]
    },
    'industriel': {
      title: 'Solutions Industrielles',
      description: 'Installations électriques industrielles et tertiaires sur mesure pour répondre aux exigences les plus strictes.',
      hero: '/images/armoire.jpg',
      features: [
        'Tableaux électriques industriels',
        'Automatisation de processus',
        'Systèmes de contrôle-commande',
        'Mise aux normes électriques',
        'Maintenance préventive',
        'Dépannage d\'urgence 24/7',
        'Formation du personnel',
        'Documentation technique complète'
      ],
      process: [
        {
          title: 'Audit Technique',
          description: 'Évaluation complète de vos installations existantes'
        },
        {
          title: 'Conception',
          description: 'Élaboration des schémas et plans d\'exécution'
        },
        {
          title: 'Réalisation',
          description: 'Installation et mise en service par nos équipes spécialisées'
        },
        {
          title: 'Validation',
          description: 'Tests de conformité et mise en service définitive'
        }
      ],
      equipment: [
        'Armoires électriques IP65',
        'Contacteurs et relais industriels',
        'Variateurs de vitesse',
        'Automates programmables',
        'Systèmes de mesure énergétique',
        'Dispositifs de protection'
      ]
    },
    'reseaux': {
      title: 'Infrastructure Réseau',
      description: 'Conception et installation d\'infrastructures réseau haute performance pour entreprises et particuliers.',
      hero: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      features: [
        'Câblage structuré Grade 3',
        'Installation fibre optique',
        'Réseaux Wi-Fi professionnels',
        'Solutions VDI complètes',
        'Coffrets de communication',
        'Tests et certification',
        'Documentation réseau',
        'Support technique'
      ],
      process: [
        {
          title: 'Étude de Faisabilité',
          description: 'Analyse des besoins et contraintes techniques'
        },
        {
          title: 'Conception Réseau',
          description: 'Élaboration de l\'architecture réseau optimale'
        },
        {
          title: 'Installation',
          description: 'Déploiement de l\'infrastructure par nos techniciens'
        },
        {
          title: 'Tests & Certification',
          description: 'Validation des performances et certification'
        }
      ],
      equipment: [
        'Coffrets de communication Grade 3',
        'Câbles cuivre et fibre optique',
        'Switches et routeurs professionnels',
        'Points d\'accès Wi-Fi',
        'Baies de brassage',
        'Équipements de test'
      ]
    },
    'maintenance': {
      title: 'Maintenance & Support',
      description: 'Services de maintenance préventive et support technique pour garantir la performance de vos installations.',
      hero: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      features: [
        'Maintenance préventive programmée',
        'Dépannage d\'urgence 24/7',
        'Support technique à distance',
        'Mise à jour des systèmes',
        'Contrôles de sécurité',
        'Rapports d\'intervention',
        'Pièces de rechange garanties',
        'Formation continue'
      ],
      process: [
        {
          title: 'Audit Initial',
          description: 'Évaluation complète de vos installations existantes'
        },
        {
          title: 'Plan de Maintenance',
          description: 'Élaboration d\'un programme de maintenance personnalisé'
        },
        {
          title: 'Interventions',
          description: 'Exécution des maintenances selon planning établi'
        },
        {
          title: 'Suivi',
          description: 'Rapports réguliers et optimisation continue'
        }
      ],
      equipment: [
        'Outils de diagnostic avancés',
        'Pièces de rechange certifiées',
        'Équipements de mesure',
        'Logiciels de maintenance',
        'Véhicules d\'intervention',
        'Stock de sécurité'
      ]
    }
  };

  const currentService = serviceData[service || ''];

  if (!currentService) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service non trouvé</h1>
          <Link to="/services" className="text-red-600 hover:text-red-700">
            Retour aux services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900">
        <img 
          src={currentService.hero} 
          alt={currentService.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link 
              to="/services" 
              className="inline-flex items-center text-white hover:text-red-400 mb-6 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Retour aux services
            </Link>
            <h1 className="text-5xl font-bold text-white mb-4">{currentService.title}</h1>
            <p className="text-xl text-gray-300 max-w-3xl">{currentService.description}</p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Caractéristiques du Service</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {currentService.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Notre Processus</h3>
              <div className="space-y-6 mb-8">
                {currentService.process.map((step: any, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Équipements Utilisés</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {currentService.equipment.map((item: string, index: number) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Informations du Service</h3>
                
                <div className="mb-6">
                  <p className="text-gray-600 leading-relaxed">
                    Contactez-nous pour obtenir des informations détaillées sur ce service 
                    et recevoir un devis personnalisé adapté à vos besoins spécifiques.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Contactez-nous</h4>
                  <div className="space-y-3">
                    <a
                      href="tel:+216xxxxxxx"
                      className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
                    >
                      <Phone className="h-4 w-4 mr-3" />
                      +216 xxxxxxxx
                    </a>
                    <a
                      href="mailto:contact@emh.tn"
                      className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
                    >
                      <Mail className="h-4 w-4 mr-3" />
                      contact@emh.tn
                    </a>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 mt-6"
                >
                  Demander un Devis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services Complémentaires</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos autres services qui peuvent compléter votre projet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(serviceData)
              .filter(([key]) => key !== service)
              .slice(0, 3)
              .map(([key, serviceItem]) => (
                <div key={key} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{serviceItem.title}</h3>
                  <p className="text-gray-600 mb-4">{serviceItem.description}</p>
                  <Link
                    to={`/services/${key}`}
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
                  >
                    En savoir plus →
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Commencer ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez nos experts pour discuter de votre projet et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-300"
            >
              Demander un Devis
            </Link>
            <a
              href="tel:+216xxxxxxx"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold rounded-lg transition-colors duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              +216 xxxxxxxx
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;