import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
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
      details: ['Rond point Globe Terrestre Route de ceinture', '4081-Zaouiet Sousse']
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+216 XX XXX XXX', '+216 XX XXX XXX']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@emh.tn', 'commercial@emh.tn']
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lun - Ven: 8h00 - 17h30', 'Sam: 8h00 - 12h00']
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contactez-Nous</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre équipe d'experts est à votre disposition pour répondre à vos questions 
            et vous accompagner dans vos projets électriques et domotiques.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <img src="/images/legrand.png" alt="Legrand Logo" className="h-10 w-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Informations de Contact</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
                      <info.icon className="h-6 w-6 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps */}
            <div className="rounded-xl overflow-hidden h-64 shadow-lg">
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
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Message Envoyé !</h4>
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
                      placeholder="Votre nom"
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
                      <option value="autre">Autre</option>
                    </select>
                  </div>
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
                    placeholder="Décrivez votre projet ou votre demande..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Envoyer le Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Urgence Électrique ?</h3>
          <p className="text-lg mb-6 opacity-90">
            Service d'intervention d'urgence disponible 24h/24 et 7j/7
          </p>
          <a
            href="tel:+216XXXXXXXX"
            className="inline-flex items-center px-8 py-4 bg-white text-red-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-300"
          >
            <Phone className="mr-2 h-5 w-5" />
            Appel d'Urgence
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;