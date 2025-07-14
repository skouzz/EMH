import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, CheckCircle, Download, Phone } from 'lucide-react';

const ProductDetail = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const productData: { [key: string]: any } = {
    'interrupteurs-prises': {
      title: 'Interrupteurs & Prises',
      description: 'Découvrez notre gamme complète d\'interrupteurs, prises et appareillage électrique Legrand, alliant design moderne et performance technique.',
      hero: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      products: [
        {
          name: 'Interrupteur Va-et-Vient Céliane',
          image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
          description: 'Interrupteur design avec finition titane, compatible avec tous les mécanismes Céliane.',
          features: ['Design moderne', 'Installation facile', 'Garantie 10 ans', 'Norme CE'],
          rating: 4.8
        },
        {
          name: 'Prise USB Céliane',
          image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
          description: 'Prise avec ports USB intégrés pour charger vos appareils directement.',
          features: ['2 ports USB', 'Charge rapide', 'Protection surtension', 'Design épuré'],
          rating: 4.9
        },
        {
          name: 'Variateur LED Céliane',
          image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
          description: 'Variateur compatible LED avec fonction mémoire et éclairage témoin.',
          features: ['Compatible LED', 'Fonction mémoire', 'Éclairage témoin', 'Réglage précis'],
          rating: 4.7
        }
      ]
    },
    'domotique': {
      title: 'Domotique MyHOME',
      description: 'Transformez votre maison en habitat intelligent avec les solutions domotiques MyHOME de Legrand.',
      hero: 'https://images.pexels.com/photos/8092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      products: [
        {
          name: 'Centrale MyHOME Server',
          image: 'https://images.pexels.com/photos/8092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
          description: 'Centrale de commande pour piloter tous vos équipements domotiques.',
          features: ['Contrôle centralisé', 'Application mobile', 'Programmation avancée', 'Évolutif'],
          rating: 4.9
        },
        {
          name: 'Écran Tactile MyHOME',
          image: 'https://images.pexels.com/photos/8092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
          description: 'Écran tactile 7" pour contrôler votre installation domotique.',
          features: ['Écran 7" couleur', 'Interface intuitive', 'Contrôle vocal', 'Design moderne'],
          rating: 4.8
        },
        {
          name: 'Module Éclairage Connecté',
          image: 'https://images.pexels.com/photos/8092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
          description: 'Module pour rendre votre éclairage intelligent et programmable.',
          features: ['Contrôle à distance', 'Programmation horaire', 'Variation d\'intensité', 'Économie d\'énergie'],
          rating: 4.6
        }
      ]
    },
    'reseaux': {
      title: 'Réseaux & Communication',
      description: 'Solutions complètes pour vos infrastructures réseau et systèmes de communication.',
      hero: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      products: [
        {
          name: 'Coffret Réseau Grade 3',
          image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
          description: 'Coffret de communication pour installations réseau haute performance.',
          features: ['Grade 3 certifié', 'Évolutif', 'Installation facile', 'Garantie 25 ans'],
          rating: 4.9
        },
        {
          name: 'Switch Gigabit 24 ports',
          image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
          description: 'Switch manageable 24 ports Gigabit pour réseaux professionnels.',
          features: ['24 ports Gigabit', 'Management web', 'VLAN support', 'QoS avancée'],
          rating: 4.7
        },
        {
          name: 'Point d\'Accès Wi-Fi 6',
          image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
          description: 'Point d\'accès Wi-Fi 6 haute performance pour couverture optimale.',
          features: ['Wi-Fi 6 (802.11ax)', 'Dual band', 'PoE+', 'Gestion centralisée'],
          rating: 4.8
        }
      ]
    },
    'protection': {
      title: 'Protection Électrique',
      description: 'Dispositifs de protection et sécurité électrique pour installations résidentielles et tertiaires.',
      hero: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      products: [
        {
          name: 'Disjoncteur DX³ 20A',
          image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
          description: 'Disjoncteur modulaire haute performance pour protection des circuits.',
          features: ['Courbe C', 'Pouvoir de coupure 6kA', 'Indicateur de défaut', 'Compact'],
          rating: 4.8
        },
        {
          name: 'Parafoudre Type 2',
          image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
          description: 'Protection contre les surtensions d\'origine atmosphérique.',
          features: ['Type 2', 'Imax 40kA', 'Indicateur visuel', 'Déconnecteur intégré'],
          rating: 4.9
        },
        {
          name: 'Différentiel 30mA',
          image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
          description: 'Interrupteur différentiel pour protection des personnes.',
          features: ['Sensibilité 30mA', 'Type AC', 'Test intégré', 'Haute fiabilité'],
          rating: 4.7
        }
      ]
    },
    'cablage': {
      title: 'Câblage & Goulottes',
      description: 'Solutions complètes de câblage et protection pour vos installations électriques.',
      hero: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      products: [
        {
          name: 'Goulotte DLP 50x80',
          image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
          description: 'Goulotte design pour câblage apparent avec finition blanche.',
          features: ['Design moderne', 'Installation facile', 'Cloisons amovibles', 'Accessoires complets'],
          rating: 4.6
        },
        {
          name: 'Chemin de Câbles Perforé',
          image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
          description: 'Chemin de câbles galvanisé pour installations industrielles.',
          features: ['Galvanisé à chaud', 'Perforations optimisées', 'Charge élevée', 'Modulaire'],
          rating: 4.8
        },
        {
          name: 'Conduit ICTA Ø20',
          image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
          description: 'Conduit isolant cintrable transversalement annelé.',
          features: ['Isolant', 'Cintrable', 'Résistant', 'Norme NF'],
          rating: 4.5
        }
      ]
    },
    'industriel': {
      title: 'Solutions Industrielles',
      description: 'Équipements et solutions pour applications industrielles et tertiaires exigeantes.',
      hero: '/images/armoire.jpg',
      products: [
        {
          name: 'Armoire Électrique IP65',
          image: '/images/armoire.jpg',
          description: 'Armoire étanche pour environnements industriels sévères.',
          features: ['IP65', 'Acier inoxydable', 'Ventilation forcée', 'Personnalisable'],
          rating: 4.9
        },
        {
          name: 'Contacteur 3P 25A',
          image: '/images/armoire.jpg',
          description: 'Contacteur tripolaire pour commande de moteurs industriels.',
          features: ['3 pôles', '25A', 'Bobine 230V', 'Contacts auxiliaires'],
          rating: 4.7
        },
        {
          name: 'Système de Mesure PM5000',
          image: '/images/armoire.jpg',
          description: 'Analyseur de réseau pour surveillance énergétique avancée.',
          features: ['Mesures précises', 'Communication Modbus', 'Écran LCD', 'Alarmes configurables'],
          rating: 4.8
        }
      ]
    }
  };

  const currentProduct = productData[category || ''];

  if (!currentProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Catégorie non trouvée</h1>
          <Link to="/produits" className="text-red-600 hover:text-red-700">
            Retour aux produits
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
          src={currentProduct.hero} 
          alt={currentProduct.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link 
              to="/produits" 
              className="inline-flex items-center text-white hover:text-red-400 mb-6 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Retour aux produits
            </Link>
            <h1 className="text-5xl font-bold text-white mb-4">{currentProduct.title}</h1>
            <p className="text-xl text-gray-300 max-w-3xl">{currentProduct.description}</p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProduct.products.map((product: any, index: number) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature: string, featureIndex: number) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                      onClick={() => navigate('/contact')}
                    >
                      Demander un devis
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Documentation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Documentation Technique</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Téléchargez les fiches techniques, guides d'installation et certificats de nos produits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <Download className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fiches Techniques</h3>
              <p className="text-gray-600 mb-4">Spécifications détaillées de tous nos produits</p>
              <button className="text-red-600 hover:text-red-700 font-semibold">
                Télécharger PDF
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <Download className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Guides d'Installation</h3>
              <p className="text-gray-600 mb-4">Instructions détaillées pour l'installation</p>
              <button className="text-red-600 hover:text-red-700 font-semibold">
                Télécharger PDF
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <Download className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certificats</h3>
              <p className="text-gray-600 mb-4">Certifications et conformités réglementaires</p>
              <button className="text-red-600 hover:text-red-700 font-semibold">
                Télécharger PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Besoin de Conseils ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Nos experts sont à votre disposition pour vous aider à choisir les produits adaptés à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-300"
            >
              Contactez un Expert
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

export default ProductDetail;