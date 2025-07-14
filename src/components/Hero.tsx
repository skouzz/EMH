import React from 'react';
import { ArrowRight, Zap, Shield, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Solutions Électriques et 
              <span className="text-red-500"> Domotiques</span> de Confiance
            </h1>
            <div className="flex items-center justify-center mb-4">
              <img src="/images/legrandwhite.png" alt="Legrand Logo" className="h-24 w-auto" />
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Distributeur officiel Legrand en Tunisie, EMH vous accompagne dans tous vos projets 
              électriques, domotiques et de réseaux avec expertise et professionnalisme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#produits"
                className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Découvrir Nos Produits
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-300"
              >
                Contactez-Nous
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold">Innovation Électrique</h3>
              </div>
              <p className="text-gray-300">Solutions modernes et performantes pour tous vos besoins électriques</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold">Qualité Garantie</h3>
              </div>
              <p className="text-gray-300">Produits Legrand certifiés avec garantie constructeur</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold">Expertise Reconnue</h3>
              </div>
              <p className="text-gray-300">Plus de 20 ans d'expérience dans le secteur électrique</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;