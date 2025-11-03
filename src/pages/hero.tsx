import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero1 = () => {
  return (
    <main className='relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 py-16 md:py-24 rounded-b-[6rem] bg-gradient-to-b from-yellow-50 to-background'>
      {/* Fond décoratif */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob'></div>
        <div className='absolute -bottom-1/2 left-0 w-[600px] h-[600px] bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000'></div>
      </div>

      {/* Contenu principal */}
      <div className='relative z-10 flex flex-col items-center text-center max-w-6xl mx-auto'>
        {/* Image de profil */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='mb-8 md:mb-12 group'
        >
          <div className='relative'>
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-orange-200 to-amber-200 blur-lg opacity-70 group-hover:opacity-100 transition-all duration-500 -z-10 animate-pulse-slow'></div>
            <img 
              src="ds/hero.jpg" 
              alt="DS Group"
              className='h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 object-cover rounded-full border-2 border-dashed border-orange-800/30 bg-background p-1 shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105' 
            />
          </div>
        </motion.div>

        {/* Texte */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className='space-y-2 md:space-y-4'
        >
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100'>
            <span className='font-delius text-sm md:text-base font-bold text-orange-800 tracking-wider'>
              MARKETING <span className='text-foreground/80'>&</span> COMMUNICATION
            </span>
          </div>
          
          <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-signature leading-none tracking-tight'>
            <span className='text-orange-300'>D</span>
            <span className='text-foreground'>S</span>{' '}
            <span className='text-orange-300'>G</span>
            <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground/90'>ROUP</span>
          </h1>
          
          <p className='max-w-2xl mx-auto text-sm md:text-base lg:text-lg text-muted-foreground font-signature px-4'>
            Rassemble plusieurs entités spécialisées en communication, offshoring, événementiel et marketing digital.
          </p>
        </motion.div>

        {/* Bouton de défilement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className='mt-12 md:mt-16'
        >
          <button 
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('activity');
              if (element) {
                element.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }}
            className='group flex flex-col items-center text-sm font-medium text-orange-800 hover:text-orange-600 transition-colors focus:outline-none'
            aria-label="Découvrir nos activités"
          >
            <span className='mb-2 font-delius'>Découvrir plus</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            >
              <ArrowDown className='h-5 w-5' />
            </motion.div>
          </button>
        </motion.div>
      </div>

      {/* Animation de fond */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 15s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.4; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </main>
  );
};

export default Hero1;