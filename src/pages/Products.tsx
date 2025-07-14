import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Home, Wifi, Settings, Shield, Cable, Search, Filter } from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    {
      id: 'interrupteurs-prises',
      icon: Zap,
      title: 'Interrupteurs & Prises',
      description: 'Gamme complète d\'interrupteurs, prises et appareillage électrique Legrand',
      image: '/images/prise.jpg',
      products: ['Interrupteurs design', 'Prises USB', 'Variateurs', 'Détecteurs de mouvement'],
      featured: true
    },
    {
      id: 'domotique',
      icon: Home,
      title: 'Domotique MyHOME',
      description: 'Solutions intelligentes pour la maison connectée et l\'automatisation',
      image: '/images/domotique.jpg', // updated path
      products: ['Systèmes MyHOME', 'Éclairage connecté', 'Volets automatiques', 'Contrôle centralisé'],
      featured: true
    },
    {
      id: 'reseaux',
      icon: Wifi,
      title: 'Réseaux & Communication',
      description: 'Infrastructure réseau et solutions de communication avancées',
      image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      products: ['Câblage structuré', 'Coffrets réseau', 'Fibre optique', 'Solutions Wi-Fi'],
      featured: false
    },
    {
      id: 'cablage',
      icon: Cable,
      title: 'Câblage & Goulottes',
      description: 'Solutions de câblage et protection des installations électriques',
      image: '/images/cablage.jpg',
      products: ['Goulottes design', 'Chemins de câbles', 'Conduits', 'Accessoires de fixation'],
      featured: false
    },
    {
      id: 'protection',
      icon: Shield,
      title: 'Protection Électrique',
      description: 'Dispositifs de protection et sécurité électrique',
      image: '/images/protection.jpg',
      products: ['Disjoncteurs', 'Parafoudres', 'Différentiels', 'Tableaux électriques'],
      featured: true
    },
    {
      id: 'industriel',
      icon: Settings,
      title: 'Solutions Industrielles',
      description: 'Équipements pour applications industrielles et tertiaires',
      image: '/images/armoire.jpg',
      products: ['Armoires électriques', 'Contacteurs', 'Relais', 'Systèmes de mesure'],
      featured: false
    }
  ];

  const filterCategories = [
    { id: 'all', name: 'Toutes les catégories' },
    { id: 'featured', name: 'Produits vedettes' },
    { id: 'interrupteurs-prises', name: 'Interrupteurs & Prises' },
    { id: 'domotique', name: 'Domotique' },
    { id: 'reseaux', name: 'Réseaux' },
    { id: 'protection', name: 'Protection' },
    { id: 'cablage', name: 'Câblage' },
    { id: 'industriel', name: 'Industriel' }
  ];

  const filteredCategories = categories.filter(category => {
    const matchesSearch = category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
                           selectedCategory === category.id ||
                           (selectedCategory === 'featured' && category.featured);
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Nos Produits Legrand</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez notre gamme complète de produits Legrand, solutions de référence 
              pour l'électricité et la domotique.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none bg-white min-w-[200px]"
              >
                {filterCategories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Aucun produit trouvé pour votre recherche.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCategories.map((category, index) => (
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
                    {category.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Vedette
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {category.products.map((product, productIndex) => (
                        <div key={productIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                          {product}
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      to={`/produits/${category.id}`}
                      className="w-full inline-flex items-center justify-center bg-gray-900 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
                    >
                      Voir les Produits
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Produits Vedettes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos produits les plus populaires et nos dernières innovations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" 
                alt="MyHOME System"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Système MyHOME</h3>
              <p className="text-gray-600 mb-4">Solution domotique complète pour maison intelligente</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/8092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" 
                alt="Interrupteurs Design"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Interrupteurs Design</h3>
              <p className="text-gray-600 mb-4">Gamme premium avec finitions haut de gamme</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" 
                alt="Solutions Réseau"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Solutions Réseau</h3>
              <p className="text-gray-600 mb-4">Infrastructure réseau professionnelle</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Besoin d'un Devis Personnalisé ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Notre équipe d'experts est à votre disposition pour vous conseiller et établir un devis adapté à vos besoins.
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
              +216 xxxxxxxx
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;