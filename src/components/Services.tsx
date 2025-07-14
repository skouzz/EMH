import { Wrench, Home, Building, Headphones, CheckCircle, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Installation Domotique',
      description: 'Installation complète de systèmes domotiques pour maisons intelligentes',
      features: ['Éclairage automatisé', 'Contrôle des volets', 'Gestion énergétique', 'Sécurité intégrée'],
      image: 'https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      icon: Building,
      title: 'Solutions Industrielles',
      description: 'Installations électriques industrielles et tertiaires sur mesure',
      features: ['Tableaux électriques', 'Automatisation', 'Maintenance préventive', 'Mise aux normes'],
      image: '/images/armoire.jpg'
    },
    {
      icon: Wrench,
      title: 'Infrastructure Réseau',
      description: 'Conception et installation d\'infrastructures réseau performantes',
      features: ['Câblage structuré', 'Fibre optique', 'Réseaux Wi-Fi', 'Solutions VDI'],
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
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
      icon: Headphones,
      title: 'Support Technique',
      description: 'Assistance technique et maintenance préventive'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EMH met son expertise à votre service pour tous vos projets électriques, 
            domotiques et de réseaux, de la conception à la maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
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
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="mt-6 w-full bg-gray-900 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300">
                  En Savoir Plus
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Pourquoi Choisir EMH ?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <advantage.icon className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{advantage.title}</h4>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-900 to-red-900 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Projet en Vue ?</h3>
          <p className="text-lg mb-6 opacity-90">
            Contactez-nous pour une étude personnalisée et un devis gratuit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-300"
            >
              Demander un Devis
            </a>
            <a
              href="tel:+216XXXXXXXX"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-colors duration-300"
            >
              Appeler Maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;