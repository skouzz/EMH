import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Linkedin, Mail } from 'lucide-react';

const NewsDetail = () => {
  const { id } = useParams();

  const articlesData: { [key: string]: any } = {
    'legrand-nouvelle-gamme-2024': {
      title: 'Legrand Lance sa Nouvelle Gamme Domotique 2024',
      date: '15 Mars 2024',
      author: 'Mohamed Hertilli',
      category: 'Innovation',
      readTime: '3 min',
      image: 'https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      content: `
        <p>Legrand, leader mondial des infrastructures électriques et numériques du bâtiment, vient de dévoiler sa nouvelle gamme domotique 2024. Cette collection révolutionnaire promet de transformer notre façon de vivre et d'interagir avec nos habitations.</p>

        <h2>Les Innovations Phares</h2>
        <p>La nouvelle gamme MyHOME 2024 intègre des technologies de pointe :</p>
        <ul>
          <li><strong>Intelligence Artificielle Intégrée</strong> : Les nouveaux modules apprennent vos habitudes pour optimiser automatiquement votre consommation énergétique.</li>
          <li><strong>Connectivité 5G</strong> : Une réactivité instantanée pour tous vos équipements connectés.</li>
          <li><strong>Interface Vocale Avancée</strong> : Contrôlez votre maison par la voix avec une précision inégalée.</li>
          <li><strong>Sécurité Renforcée</strong> : Chiffrement de bout en bout pour protéger vos données personnelles.</li>
        </ul>

        <h2>Impact sur le Marché Tunisien</h2>
        <p>En tant que distributeur officiel Legrand en Tunisie, EMH est fier de proposer ces innovations à nos clients. Cette nouvelle gamme répond parfaitement aux besoins croissants du marché tunisien en matière de maisons intelligentes.</p>

        <p>Les avantages pour nos clients :</p>
        <ul>
          <li>Réduction de 30% de la consommation énergétique</li>
          <li>Confort d'utilisation optimisé</li>
          <li>Sécurité domestique renforcée</li>
          <li>Valorisation immobilière</li>
        </ul>

        <h2>Disponibilité et Installation</h2>
        <p>La nouvelle gamme MyHOME 2024 est disponible dès maintenant chez EMH. Nos équipes certifiées Legrand sont prêtes à vous accompagner dans l'installation et la configuration de votre système domotique.</p>

        <p>Pour découvrir ces innovations, n'hésitez pas à prendre rendez-vous avec nos experts pour une démonstration personnalisée.</p>
      `
    },
    'nouvelles-normes-electriques-2024': {
      title: 'Nouvelles Normes Électriques : Ce qui Change en 2024',
      date: '8 Mars 2024',
      author: 'Équipe Technique EMH',
      category: 'Réglementation',
      readTime: '5 min',
      image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      content: `
        <p>L'année 2024 marque l'entrée en vigueur de nouvelles normes électriques importantes qui impactent directement les installations résidentielles et tertiaires. EMH fait le point sur ces évolutions réglementaires.</p>

        <h2>Principales Modifications</h2>
        <p>Les nouvelles normes NF C 15-100 et NF C 14-100 apportent des changements significatifs :</p>

        <h3>1. Protection Différentielle Renforcée</h3>
        <ul>
          <li>Obligation d'installer des dispositifs différentiels de type A pour certains circuits</li>
          <li>Réduction du seuil de déclenchement à 10mA pour les salles d'eau</li>
          <li>Protection parafoudre obligatoire dans certaines zones</li>
        </ul>

        <h3>2. Circuits Spécialisés</h3>
        <ul>
          <li>Augmentation du nombre de prises par circuit</li>
          <li>Nouveaux circuits dédiés pour les véhicules électriques</li>
          <li>Prises USB intégrées dans les installations neuves</li>
        </ul>

        <h2>Impact sur les Installations Existantes</h2>
        <p>Les propriétaires d'installations anciennes doivent être vigilants :</p>
        <ul>
          <li>Mise aux normes obligatoire lors de rénovations importantes</li>
          <li>Contrôles renforcés par les organismes agréés</li>
          <li>Sanctions en cas de non-conformité</li>
        </ul>

        <h2>Accompagnement EMH</h2>
        <p>EMH vous accompagne dans cette transition :</p>
        <ul>
          <li>Audit gratuit de vos installations</li>
          <li>Devis personnalisé pour la mise aux normes</li>
          <li>Installation par des techniciens certifiés</li>
          <li>Garantie de conformité</li>
        </ul>

        <p>N'attendez pas pour mettre vos installations aux nouvelles normes. Contactez nos experts pour un diagnostic complet.</p>
      `
    },
    'eclairage-led-intelligent': {
      title: 'L\'Éclairage LED Intelligent : Économies et Confort',
      date: '1 Mars 2024',
      author: 'Service Commercial',
      category: 'Éclairage',
      readTime: '4 min',
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      content: `
        <p>L'éclairage LED intelligent représente une révolution dans notre façon de concevoir l'éclairage domestique et professionnel. Découvrez comment cette technologie transforme nos espaces de vie.</p>

        <h2>Qu'est-ce que l'Éclairage LED Intelligent ?</h2>
        <p>L'éclairage LED intelligent combine la technologie LED haute efficacité avec des systèmes de contrôle avancés permettant :</p>
        <ul>
          <li>Variation d'intensité automatique</li>
          <li>Changement de température de couleur</li>
          <li>Programmation horaire</li>
          <li>Contrôle à distance via smartphone</li>
          <li>Détection de présence</li>
        </ul>

        <h2>Avantages Économiques</h2>
        <p>Les économies réalisées sont substantielles :</p>
        <ul>
          <li><strong>Consommation réduite de 80%</strong> par rapport à l'éclairage traditionnel</li>
          <li><strong>Durée de vie 25 fois supérieure</strong> aux ampoules classiques</li>
          <li><strong>Maintenance réduite</strong> grâce à la longévité des LED</li>
          <li><strong>Optimisation automatique</strong> selon l'occupation des espaces</li>
        </ul>

        <h2>Confort et Bien-être</h2>
        <p>L'éclairage intelligent améliore significativement le confort :</p>
        <ul>
          <li>Adaptation automatique à l'heure de la journée</li>
          <li>Simulation de la lumière naturelle</li>
          <li>Ambiances personnalisables</li>
          <li>Réduction de la fatigue oculaire</li>
        </ul>

        <h2>Solutions Legrand</h2>
        <p>EMH propose la gamme complète d'éclairage intelligent Legrand :</p>
        <ul>
          <li>Variateurs connectés Céliane</li>
          <li>Détecteurs de mouvement intelligents</li>
          <li>Modules de contrôle MyHOME</li>
          <li>Applications de gestion centralisée</li>
        </ul>

        <p>Transformez votre éclairage dès aujourd'hui et découvrez les bénéfices de l'intelligence lumineuse.</p>
      `
    }
  };

  const currentArticle = articlesData[id || ''];

  if (!currentArticle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <Link to="/actualites" className="text-red-600 hover:text-red-700">
            Retour aux actualités
          </Link>
        </div>
      </div>
    );
  }

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900">
        <img 
          src={currentArticle.image} 
          alt={currentArticle.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link 
              to="/actualites" 
              className="inline-flex items-center text-white hover:text-red-400 mb-6 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Retour aux actualités
            </Link>
            
            <div className="mb-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(currentArticle.category)}`}>
                <Tag className="h-4 w-4 mr-1" />
                {currentArticle.category}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">{currentArticle.title}</h1>
            
            <div className="flex items-center text-white text-sm">
              <Calendar className="h-4 w-4 mr-2" />
              {currentArticle.date}
              <span className="mx-3">•</span>
              <User className="h-4 w-4 mr-2" />
              {currentArticle.author}
              <span className="mx-3">•</span>
              <span>{currentArticle.readTime} de lecture</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900"
                dangerouslySetInnerHTML={{ __html: currentArticle.content }}
              />

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Partager cet article</h3>
                  <div className="flex space-x-4">
                    <button className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300">
                      <Facebook className="h-5 w-5" />
                    </button>
                    <button className="inline-flex items-center justify-center w-10 h-10 bg-blue-800 hover:bg-blue-900 text-white rounded-full transition-colors duration-300">
                      <Linkedin className="h-5 w-5" />
                    </button>
                    <button className="inline-flex items-center justify-center w-10 h-10 bg-gray-600 hover:bg-gray-700 text-white rounded-full transition-colors duration-300">
                      <Mail className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Author Info */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">À propos de l'auteur</h3>
                  <div className="flex items-center mb-4">
                    <img 
                      src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop" 
                      alt={currentArticle.author}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{currentArticle.author}</h4>
                      <p className="text-sm text-gray-600">Expert EMH</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Spécialiste en solutions électriques et domotiques, 
                    partageant son expertise pour vous aider dans vos projets.
                  </p>
                </div>

                {/* Related Articles */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Articles Similaires</h3>
                  <div className="space-y-4">
                    {Object.entries(articlesData)
                      .filter(([key]) => key !== id)
                      .slice(0, 3)
                      .map(([key, article]) => (
                        <Link
                          key={key}
                          to={`/actualites/${key}`}
                          className="block group"
                        >
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-red-600 transition-colors duration-300 mb-1">
                            {article.title}
                          </h4>
                          <p className="text-xs text-gray-500">{article.date}</p>
                        </Link>
                      ))}
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Besoin de Conseils ?</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    Nos experts sont à votre disposition pour répondre à vos questions.
                  </p>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm"
                  >
                    Contactez-nous
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Restez Informé</h3>
            <p className="text-gray-600 mb-6">
              Abonnez-vous à notre newsletter pour recevoir nos derniers articles et actualités.
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
      </section>
    </div>
  );
};

export default NewsDetail;