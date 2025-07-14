import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Tag, Search, User } from 'lucide-react';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const articles = [
    {
      id: 'legrand-nouvelle-gamme-2024',
      title: 'Legrand Lance sa Nouvelle Gamme Domotique 2024',
      excerpt: 'Découvrez les dernières innovations en matière de maison connectée avec les nouveaux produits MyHOME de Legrand.',
      content: 'Legrand présente sa nouvelle gamme domotique 2024 avec des fonctionnalités révolutionnaires...',
      date: '15 Mars 2024',
      category: 'Innovation',
      author: 'Mohamed Hertilli',
      image: 'https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      readTime: '3 min',
      featured: true
    },
    {
      id: 'nouvelles-normes-electriques-2024',
      title: 'Nouvelles Normes Électriques : Ce qui Change en 2024',
      excerpt: 'Tour d\'horizon des nouvelles réglementations électriques et leur impact sur vos installations.',
      content: 'Les nouvelles normes électriques 2024 apportent des changements significatifs...',
      date: '8 Mars 2024',
      category: 'Réglementation',
      author: 'Équipe Technique EMH',
      image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      readTime: '5 min',
      featured: true
    },
    {
      id: 'eclairage-led-intelligent',
      title: 'L\'Éclairage LED Intelligent : Économies et Confort',
      excerpt: 'Comment l\'éclairage LED connecté révolutionne nos habitudes et réduit notre consommation énergétique.',
      content: 'L\'éclairage LED intelligent représente une révolution dans notre façon de concevoir l\'éclairage...',
      date: '1 Mars 2024',
      category: 'Éclairage',
      author: 'Service Commercial',
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      readTime: '4 min',
      featured: false
    },
    {
      id: 'installation-reseau-fibre-cuivre',
      title: 'Installation Réseau : Fibre Optique vs Câblage Cuivre',
      excerpt: 'Comparatif détaillé pour vous aider à choisir la meilleure solution réseau pour votre projet.',
      content: 'Le choix entre fibre optique et câblage cuivre dépend de plusieurs facteurs...',
      date: '22 Février 2024',
      category: 'Réseaux',
      author: 'Équipe Réseau EMH',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      readTime: '6 min',
      featured: false
    },
    {
      id: 'domotique-securite-maison',
      title: 'Domotique et Sécurité : Protéger sa Maison Intelligemment',
      excerpt: 'Les solutions domotiques modernes pour renforcer la sécurité de votre habitation.',
      content: 'La domotique offre des solutions innovantes pour sécuriser votre domicile...',
      date: '15 Février 2024',
      category: 'Sécurité',
      author: 'Mohamed Hertilli',
      image: 'https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      readTime: '4 min',
      featured: false
    },
    {
      id: 'maintenance-preventive-installations',
      title: 'Maintenance Préventive : Prolonger la Vie de vos Installations',
      excerpt: 'L\'importance de la maintenance préventive pour optimiser la performance et la durabilité.',
      content: 'Une maintenance préventive régulière est essentielle pour garantir...',
      date: '8 Février 2024',
      category: 'Maintenance',
      author: 'Service Technique',
      image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      readTime: '5 min',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'Toutes les catégories' },
    { id: 'Innovation', name: 'Innovation' },
    { id: 'Réglementation', name: 'Réglementation' },
    { id: 'Éclairage', name: 'Éclairage' },
    { id: 'Réseaux', name: 'Réseaux' },
    { id: 'Sécurité', name: 'Sécurité' },
    { id: 'Maintenance', name: 'Maintenance' }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Innovation': 'bg-blue-100 text-blue-800',
      'Réglementation': 'bg-green-100 text-green-800',
      'Éclairage': 'bg-yellow-100 text-yellow-800',
      'Réseaux': 'bg-purple-100 text-purple-800',
      'Sécurité': 'bg-red-100 text-red-800',
      'Maintenance': 'bg-gray-100 text-gray-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Actualités & Blog</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Restez informé des dernières tendances technologiques, nouveautés produits 
              et conseils d'experts dans le domaine électrique et domotique.
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
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-4 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none bg-white min-w-[200px]"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Articles à la Une</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <article key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                        <Tag className="h-3 w-3 mr-1" />
                        {article.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        À la Une
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      {article.date}
                      <span className="mx-2">•</span>
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                      <span className="mx-2">•</span>
                      <span>{article.readTime} de lecture</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <Link
                      to={`/actualites/${article.id}`}
                      className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors duration-300"
                    >
                      Lire la suite
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {regularArticles.length > 0 && (
            <>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Tous les Articles</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularArticles.map((article, index) => (
                  <article key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                          <Tag className="h-3 w-3 mr-1" />
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        {article.date}
                        <span className="mx-2">•</span>
                        <span>{article.readTime} de lecture</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="h-4 w-4 mr-1" />
                          {article.author}
                        </div>
                        <Link
                          to={`/actualites/${article.id}`}
                          className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors duration-300 text-sm"
                        >
                          Lire
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Aucun article trouvé pour votre recherche.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-50 to-gray-50 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Newsletter EMH</h3>
              <p className="text-gray-600 mb-6">
                Recevez nos dernières actualités, conseils techniques et offres spéciales directement dans votre boîte mail.
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300">
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;