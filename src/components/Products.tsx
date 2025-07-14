import { Zap, Home, Wifi, Settings, Shield, Cable } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      icon: Zap,
      title: 'Interrupteurs & Prises',
      description: 'Gamme complète d\'interrupteurs, prises et appareillage électrique Legrand',
      image: '/images/prise.jpg',
      products: ['Interrupteurs design', 'Prises USB', 'Variateurs', 'Détecteurs de mouvement']
    },
    {
      icon: Home,
      title: 'Domotique',
      description: 'Solutions intelligentes pour la maison connectée et l\'automatisation',
      image: '/images/domotique.jpg',
      products: ['Systèmes MyHOME', 'Éclairage connecté', 'Volets automatiques', 'Contrôle centralisé']
    },
    {
      icon: Wifi,
      title: 'Réseaux & Communication',
      description: 'Infrastructure réseau et solutions de communication avancées',
      image: '/images/cablage.jpg',
      products: ['Câblage structuré', 'Coffrets réseau', 'Fibre optique', 'Solutions Wi-Fi']
    },
    {
      icon: Cable,
      title: 'Câblage & Goulottes',
      description: 'Solutions de câblage et protection des installations électriques',
      image: '/images/cablage.jpg',
      products: ['Goulottes design', 'Chemins de câbles', 'Conduits', 'Accessoires de fixation']
    },
    {
      icon: Shield,
      title: 'Protection Électrique',
      description: 'Dispositifs de protection et sécurité électrique',
      image: '/images/protection.jpg',
      products: ['Disjoncteurs', 'Parafoudres', 'Différentiels', 'Tableaux électriques']
    },
    {
      icon: Settings,
      title: 'Solutions Industrielles',
      description: 'Équipements pour applications industrielles et tertiaires',
      image: '/images/armoire.jpg',
      products: ['Armoires électriques', 'Contacteurs', 'Relais', 'Systèmes de mesure']
    }
  ];

  return (
    <section id="produits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Produits Legrand</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète de produits Legrand, solutions de référence 
            pour l'électricité et la domotique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-red-600 rounded-full">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                
                <div className="space-y-2">
                  {category.products.map((product, productIndex) => (
                    <div key={productIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      {product}
                    </div>
                  ))}
                </div>
                
                <button className="mt-6 w-full bg-gray-900 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300">
                  Voir les Produits
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Besoin d'un Devis Personnalisé ?</h3>
            <p className="text-gray-600 mb-6">
              Notre équipe d'experts est à votre disposition pour vous conseiller et établir un devis adapté à vos besoins.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Demander un Devis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;