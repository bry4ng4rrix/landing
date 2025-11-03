import React from 'react'
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    title: 'Marketing Digital',
    description: 'Stratégies de marketing numérique sur mesure pour booster votre présence en ligne et atteindre votre public cible.',
    image: '/logo/marketing.png',
    features: [
      'Stratégie de contenu',
      'Publicité en ligne',
      'Optimisation SEO',
      'Marketing des médias sociaux'
    ]
  },
  {
    title: 'Commercial',
    description: 'Solutions commerciales innovantes pour développer votre entreprise et atteindre de nouveaux marchés.',
    image: '/logo/commercial.jpg',
    features: [
      'Stratégie commerciale',
      'Développement client',
      'Négociation',
      'Gestion de la relation client'
    ]
  },
  {
    title: 'Événementiel',
    description: 'Organisation et gestion complète d\'événements mémorables qui marquent les esprits.',
    image: '/logo/family.png',
    features: [
      'Planification d\'événements',
      'Gestion logistique',
      'Communication événementielle',
      'Animation et divertissement'
    ]
  },
  {
    title: 'Conseil en Stratégie',
    description: 'Expertise en stratégie d\'entreprise pour vous aider à atteindre vos objectifs commerciaux.',
    image: '/logo/logo.png',
    features: [
      'Analyse de marché',
      'Stratégie d\'entreprise',
      'Optimisation des processus',
      'Innovation et croissance'
    ]
  }
];

const Service = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-signature font-bold text-orange-800 mb-2 sm:mb-3">
            Nos <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
            Découvrez notre gamme complète de services conçus pour répondre à tous vos besoins professionnels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <div className="h-36 xs:h-40 sm:h-44 md:h-48 lg:h-52 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-1.5 sm:mb-2.5">{service.title}</h3>
                <p className="text-xs xs:text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{service.description}</p>
                
                <ul className="space-y-1 sm:space-y-1.5 mb-3 sm:mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500 mr-1.5 sm:mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-xs xs:text-sm sm:text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto pt-2">
                  <button className="inline-flex items-center text-xs xs:text-sm sm:text-base text-orange-600 hover:text-orange-700 font-medium transition-colors">
                    En savoir plus
                    <ArrowRight className="ml-1.5 w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 sm:mt-12 md:mt-16 mx-2 sm:mx-0 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 text-center"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
            Vous avez un projet en tête ?
          </h3>
          <p className="text-xs xs:text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 max-w-2xl mx-auto">
            Notre équipe d'experts est prête à vous accompagner dans la réalisation de vos objectifs.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white text-xs xs:text-sm sm:text-base font-medium py-2 xs:py-2.5 sm:py-3 px-5 sm:px-7 rounded-full transition-colors duration-300 inline-flex items-center">
            Contactez-nous
            <ArrowRight className="ml-1.5 w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;