import { Users, Target, Handshake, TrendingUp } from 'lucide-react';

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

  return (
    <section id="apropos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">À Propos d'EMH</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Distributeur officiel Legrand, nous sommes votre partenaire de confiance pour tous vos besoins 
            en solutions électriques, domotiques et de réseaux.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Notre Mission</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              EMH – Établissement Mohamed Hertilli est un distributeur officiel de la marque française Legrand, 
              leader mondial des infrastructures électriques et numériques du bâtiment.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Nous offrons une gamme complète de services incluant la domotique, les réseaux, 
              les systèmes électriques et les solutions industrielles. Notre expertise nous permet 
              d'accompagner nos clients depuis la conception jusqu'à la réalisation de leurs projets.
            </p>
            <div className="flex items-center space-x-4">
              <img 
                src="/images/legrand.png" 
                alt="Legrand Partnership" 
                className="h-16 w-auto"
              />
              <div>
                <p className="font-semibold text-gray-900">Partenariat Officiel</p>
                <p className="text-gray-600">Distributeur agréé Legrand</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
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
  );
};

export default About;