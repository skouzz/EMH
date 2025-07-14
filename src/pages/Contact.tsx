import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      details: [
        'Rond point Globe Terrestre Route de ceinture',
        '4081-Zaouiet Sousse'
      ],
      link: 'https://maps.google.com'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+216 xxxxxxxx', '+216 xxxxxxxx'],
      link: 'tel:+216xxxxxxx'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@emh.tn', 'commercial@emh.tn'],
      link: 'mailto:contact@emh.tn'
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lun - Ven: 8h00 - 17h30', 'Sam: 8h00 - 12h00'],
      link: null
    }
  ];

  const services = [
    {
      title: 'Devis Gratuit',
      description: 'Estimation personnalisée pour vos projets',
      icon: '💰'
    },
    {
      title: 'Conseil Expert',
      description: 'Accompagnement technique spécialisé',
      icon: '🎯'
    },
    {
      title: 'Installation',
      description: 'Pose par des techniciens certifiés',
      icon: '🔧'
    },
    {
      title: 'Maintenance',
      description: 'Service après-vente et maintenance',
      icon: '⚙️'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Contactez-Nous</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Notre équipe d'experts est à votre disposition pour répondre à vos questions 
              et vous accompagner dans vos projets électriques et domotiques.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Informations de Contact</h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
                        <info.icon className="h-6 w-6 text-red-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">
                          {info.link && detailIndex === 0 ? (
                            <a href={info.link} className="hover:text-red-600 transition-colors">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Maps */}
              <div className="rounded-xl overflow-hidden h-64 shadow-lg mb-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d352.44684628384584!2d10.621157697010663!3d35.79848737734516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2stn!4v1752534278837!5m2!1sfr!2stn" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EMH Location - Rond point Globe Terrestre Route de ceinture, 4081-Zaouiet Sousse"
                ></iframe>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">{service.icon}</div>
                    <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Envoyez-nous un Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Envoyé !</h3>
                  <p className="text-gray-600">Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom Complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                        placeholder="+216 XX XXX XXX"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="devis">Demande de devis</option>
                      <option value="domotique">Installation domotique</option>
                      <option value="industriel">Solution industrielle</option>
                      <option value="reseau">Infrastructure réseau</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="formation">Formation</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-200 resize-none"
                      placeholder="Décrivez votre projet ou votre demande en détail..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold rounded-lg transition-colors duration-300"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Envoyer le Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Questions Fréquentes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trouvez rapidement les réponses aux questions les plus courantes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Quels sont vos délais d'intervention ?
                </h3>
                <p className="text-gray-600">
                  Nous intervenons dans les 24h pour les urgences et sous 48h pour les demandes standard. 
                  Les projets d'installation sont planifiés selon vos disponibilités.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Proposez-vous des devis gratuits ?
                </h3>
                <p className="text-gray-600">
                  Oui, tous nos devis sont gratuits et sans engagement. Nous nous déplaçons 
                  pour évaluer vos besoins et vous proposer la solution la plus adaptée.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Quelle garantie offrez-vous ?
                </h3>
                <p className="text-gray-600">
                  Nous offrons une garantie de 2 ans sur nos installations et jusqu'à 10 ans 
                  sur les produits Legrand selon les gammes.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Travaillez-vous avec les particuliers ?
                </h3>
                <p className="text-gray-600">
                  Absolument ! Nous intervenons aussi bien chez les particuliers que pour 
                  les entreprises, avec des solutions adaptées à chaque besoin.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Proposez-vous de la formation ?
                </h3>
                <p className="text-gray-600">
                  Oui, nous proposons des formations sur l'utilisation des systèmes domotiques 
                  et la maintenance de base de vos installations.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Comment obtenir un devis ?
                </h3>
                <p className="text-gray-600">
                  Contactez-nous par téléphone, email ou via le formulaire ci-dessus. 
                  Nous programmerons une visite technique gratuite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Urgence Électrique ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Service d'intervention d'urgence disponible 24h/24 et 7j/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+216xxxxxxx"
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              +216 xxxxxxxx
            </a>
            <a
              href="https://wa.me/216xxxxxxx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold rounded-lg transition-colors duration-300"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;