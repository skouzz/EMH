import { Link } from 'react-router-dom';
import { Wrench, Home, Building, Headphones, CheckCircle, Clock, Users, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'domotique',
      icon: Home,
      title: 'Installation Domotique',
      description: 'Installation complète de systèmes domotiques pour maisons intelligentes',
      features: ['Éclairage automatisé', 'Contrôle des volets', 'Gestion énergétique', 'Sécurité intégrée'],
      image: 'https://images.pexels.com/photos/8092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      id: 'industriel',
      icon: Building,
      title: 'Solutions Industrielles',
      description: 'Installations électriques industrielles et tertiaires sur mesure',
      features: ['Tableaux électriques', 'Automatisation', 'Maintenance préventive', 'Mise aux normes'],
      image: '/images/armoire.jpg'
    },
    {
      id: 'reseaux',
      icon: Wrench,
      title: 'Infrastructure Réseau',
      description: 'Conception et installation d\'infrastructures réseau performantes',
      features: ['Câblage structuré', 'Fibre optique', 'Réseaux Wi-Fi', 'Solutions VDI'],
      image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      id: 'maintenance',
      icon: Headphones,
      title: 'Maintenance & Support',
      description: 'Services de maintenance préventive et support technique 24/7',
      features: ['Maintenance préventive', 'Dépannage urgent', 'Support technique', 'Contrats de service'],
      image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    }
  ];

  const advantages = [
    {
      icon: CheckCircle,
      title: 'Expertise Certifiée',
      description: 'Techniciens certifiés Legrand avec formation continue'
    },
    {
      icon: Clock,
      title: 'Intervention Rapide',
      description: 'Service d\'intervention dans les 24h en cas d\'urgence'
    },
    {
      icon: Users,
      title: 'Équipe Expérimentée',
      description: 'Plus de 20 ans d\'expérience dans le secteur'
    },
    {
      icon: Award,
      title: 'Garantie Qualité',
      description: 'Garantie sur tous nos travaux et installations'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Analyse des Besoins',
      description: 'Étude approfondie de votre projet et de vos exigences'
    },
    {
      step: '02',
      title: 'Conception & Devis',
      description: 'Élaboration de la solution technique et devis détaillé'
    },
    {
      step: '03',
      title: 'Installation',
      description: 'Réalisation des travaux par nos équipes certifiées'
    },
    {
      step: '04',
      title: 'Tests & Formation',
      description: 'Validation du système et formation des utilisateurs'
    },
    {
      step: '05',
      title: 'Maintenance',
      description: 'Suivi et maintenance pour garantir la performance'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Nos Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              EMH met son expertise à votre service pour tous vos projets électriques, 
              domotiques et de réseaux, de la conception à la maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-red-600 rounded-full">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={`/services/${service.id}`}
                    className="w-full inline-flex items-center justify-center bg-gray-900 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
                  >
                    En Savoir Plus
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Processus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche méthodique pour garantir la réussite de vos projets.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pourquoi Choisir EMH ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les avantages qui font la différence dans nos prestations de service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <advantage.icon className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{advantage.title}</h4>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Témoignages Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ce que nos clients disent de nos services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop" 
                  alt="Client"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Ahmed Ben Ali</h4>
                  <p className="text-gray-600 text-sm">Directeur Technique</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "EMH a réalisé l'installation domotique de notre siège social. 
                Travail professionnel et équipe très compétente."
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop" 
                  alt="Client"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Fatma Trabelsi</h4>
                  <p className="text-gray-600 text-sm">Architecte</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Excellent service pour l'installation réseau de notre projet. 
                Respect des délais et qualité au rendez-vous."
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop" 
                  alt="Client"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Karim Mansouri</h4>
                  <p className="text-gray-600 text-sm">Promoteur Immobilier</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Partenaire de confiance pour tous nos projets immobiliers. 
                Expertise technique remarquable."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Projet en Vue ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous pour une étude personnalisée et un devis gratuit
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

export default Services;