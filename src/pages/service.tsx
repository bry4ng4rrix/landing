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
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-signature font-bold text-orange-800 mb-4">
            Nos <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre gamme complète de services conçus pour répondre à tous vos besoins professionnels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors">
                  En savoir plus
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Vous avez un projet en tête ?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Notre équipe d'experts est prête à vous accompagner dans la réalisation de vos objectifs.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 inline-flex items-center">
            Contactez-nous
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;