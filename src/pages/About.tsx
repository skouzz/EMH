import { Users, Target, Handshake, TrendingUp, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '20+', label: 'Années d\'expérience' },
    { number: '1000+', label: 'Projets réalisés' },
    { number: '500+', label: 'Clients satisfaits' },
    { number: '24/7', label: 'Support technique' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet, en offrant des solutions de qualité supérieure.'
    },
    {
      icon: Handshake,
      title: 'Confiance',
      description: 'Partenaire de confiance, nous construisons des relations durables avec nos clients.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Toujours à la pointe de la technologie pour vous offrir les meilleures solutions.'
    },
    {
      icon: Users,
      title: 'Expertise',
      description: 'Une équipe d\'experts qualifiés pour vous accompagner dans tous vos projets.'
    }
  ];

  const timeline = [
    {
      year: '2025',
      title: 'Création d\'EMH',
      description: 'Fondation de l\'Établissement Mohamed Hertilli avec une vision claire : devenir le leader des solutions électriques en Tunisie.'
    },
    {
      year: '2025',
      title: 'Partenariat Legrand',
      description: 'Signature du contrat de distribution officielle avec Legrand France, marquant un tournant décisif.'
    },
    {
      year: '2025',
      title: 'Expansion Services',
      description: 'Développement de notre département services avec des équipes spécialisées en domotique et réseaux.'
    },
    {
      year: '2025',
      title: 'Certification Qualité',
      description: 'Obtention des certifications ISO 9001 et qualification Legrand Premium Partner.'
    },
    {
      year: '2025',
      title: 'Innovation Continue',
      description: 'Lancement de nouvelles solutions IoT et smart building pour répondre aux défis de demain.'
    }
  ];

  const certifications = [
    {
      name: 'Legrand Premium Partner',
      description: 'Plus haut niveau de certification Legrand',
      image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'ISO 9001:2015',
      description: 'Système de management de la qualité',
      image: 'https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Qualification Électricien',
      description: 'Agréé par le Ministère de l\'Industrie',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">À Propos d'EMH</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Depuis plus de 20 ans, EMH est votre partenaire de confiance pour tous vos besoins 
              en solutions électriques, domotiques et de réseaux en Tunisie.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                EMH – Établissement Mohamed Hertilli a été fondé en 2025 avec une vision claire : 
                devenir le distributeur de référence des solutions électriques et domotiques en Tunisie.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                En 2025, nous avons franchi une étape décisive en devenant distributeur officiel 
                de Legrand, leader mondial des infrastructures électriques et numériques du bâtiment.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Aujourd'hui, nous sommes fiers d'être reconnus comme Legrand Premium Partner, 
                le plus haut niveau de certification accordé par la marque française.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                    <div className="text-gray-700 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/images/EMH.jpg" 
                alt="EMH Team" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-xl">
                <div className="text-2xl font-bold">Premium Partner</div>
                <div className="text-sm opacity-90">Legrand Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Parcours</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les étapes clés qui ont marqué l'évolution d'EMH au fil des années.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-600"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-red-600 font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre action quotidienne et notre relation avec nos clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Agréments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos certifications témoignent de notre engagement qualité et de notre expertise reconnue.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={cert.image} 
                  alt={cert.name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.name}</h3>
                <p className="text-gray-600">{cert.description}</p>
                <div className="mt-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une équipe de professionnels passionnés et expérimentés à votre service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
                alt="Mohamed Hertilli"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mohamed Hertilli</h3>
              <p className="text-red-600 font-semibold mb-3">Directeur Général</p>
              <p className="text-gray-600">Fondateur d'EMH, expert en solutions électriques avec plus de 25 ans d'expérience.</p>
            </div>

            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
                alt="Équipe Technique"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Équipe Technique</h3>
              <p className="text-red-600 font-semibold mb-3">Ingénieurs & Techniciens</p>
              <p className="text-gray-600">Spécialistes certifiés en domotique, réseaux et installations électriques.</p>
            </div>

            <div className="text-center">
              <img 
                src="/images/profile1.png" 
                alt="Oussama Ben Mahmoud"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Oussama Ben Mahmoud</h3>
              <p className="text-red-600 font-semibold mb-3">Ingénieur en Informatique</p>
              <p className="text-gray-600">Expert en informatique, développement et intégration de solutions connectées.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Collaborer avec EMH ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Découvrez comment notre expertise peut transformer vos projets électriques et domotiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-300"
            >
              Contactez-Nous
            </a>
            <a
              href="/produits"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold rounded-lg transition-colors duration-300"
            >
              Voir Nos Produits
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;