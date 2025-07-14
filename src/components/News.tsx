import React from 'react';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const News = () => {
  const articles = [
    {
      title: 'Legrand Lance sa Nouvelle Gamme Domotique 2024',
      excerpt: 'Découvrez les dernières innovations en matière de maison connectée avec les nouveaux produits MyHOME de Legrand.',
      date: '15 Mars 2024',
      category: 'Innovation',
      image: 'https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      readTime: '3 min'
    },
    {
      title: 'Nouvelles Normes Électriques : Ce qui Change en 2024',
      excerpt: 'Tour d\'horizon des nouvelles réglementations électriques et leur impact sur vos installations.',
      date: '8 Mars 2024',
      category: 'Réglementation',
      image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      readTime: '5 min'
    },
    {
      title: 'L\'Éclairage LED Intelligent : Économies et Confort',
      excerpt: 'Comment l\'éclairage LED connecté révolutionne nos habitudes et réduit notre consommation énergétique.',
      date: '1 Mars 2024',
      category: 'Éclairage',
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      readTime: '4 min'
    },
    {
      title: 'Installation Réseau : Fibre Optique vs Câblage Cuivre',
      excerpt: 'Comparatif détaillé pour vous aider à choisir la meilleure solution réseau pour votre projet.',
      date: '22 Février 2024',
      category: 'Réseaux',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      readTime: '6 min'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Innovation': 'bg-blue-100 text-blue-800',
      'Réglementation': 'bg-green-100 text-green-800',
      'Éclairage': 'bg-yellow-100 text-yellow-800',
      'Réseaux': 'bg-purple-100 text-purple-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="actualites" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Actualités & Blog</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Restez informé des dernières tendances technologiques, nouveautés produits 
            et conseils d'experts dans le domaine électrique et domotique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {articles.map((article, index) => (
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
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <button className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors duration-300">
                  Lire la suite
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center px-8 py-4 bg-gray-900 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-300">
            Voir Tous les Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-50 to-gray-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Newsletter EMH</h3>
            <p className="text-gray-600 mb-6">
              Recevez nos dernières actualités, conseils techniques et offres spéciales directement dans votre boîte mail.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
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
  );
};

export default News;