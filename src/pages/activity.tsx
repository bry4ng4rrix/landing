

import { motion } from 'framer-motion';

const activityItems = [
  {
    src: 'ds/1.jpg',
    alt: 'Activité 1',
    borderColor: 'border-blue-400/70',
    delay: 0.1,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    size: 'h-48 md:h-56 lg:h-64',
  },
  {
    src: 'ds/2.jpg',
    alt: 'Activité 2',
    borderColor: 'border-fuchsia-500/70',
    delay: 0.2,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    size: 'h-48 md:h-56 lg:h-64',
  },
  {
    src: 'ds/3.jpg',
    alt: 'Activité 3',
    borderColor: 'border-sky-400/70',
    delay: 0.3,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-2',
    size: 'h-64 md:h-[28rem] lg:h-[32rem]',
  },
  {
    src: 'ds/4.jpg',
    alt: 'Activité 4',
    borderColor: 'border-amber-400/70',
    delay: 0.2,
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
    size: 'h-48 md:h-56 lg:h-64',
  },
  {
    src: 'ds/5.jpg',
    alt: 'Activité 5',
    borderColor: 'border-green-400/70',
    delay: 0.1,
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
    size: 'h-48 md:h-56 lg:h-64',
  },
  {
    src: 'ds/6.jpg',
    alt: 'Activité 6',
    borderColor: 'border-amber-500/70',
    delay: 0.3,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-2',
    size: 'h-64 md:h-[28rem] lg:h-[32rem]',
  },
  {
    src: 'ds/7.jpg',
    alt: 'Activité 7',
    borderColor: 'border-sky-400/70',
    delay: 0.1,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    size: 'h-48 md:h-56 lg:h-64',
  },
  
  {
    src: 'ds/8.jpg',
    alt: 'Activité 7',
    borderColor: 'border-sky-400/70',
    delay: 0.1,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    size: 'h-48 md:h-56 lg:h-64',
  },
];

const Activity = () => {
  return (
    <section id="activity" className="relative py-20 md:py-28 bg-gradient-to-b from-background to-yellow-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-signature text-orange-300 mb-4">
            Nos Activités
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos différents domaines d'expertise et réalisations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activityItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              className={`relative group ${item.colSpan} ${item.rowSpan}`}
            >
              <div className={`relative overflow-hidden rounded-2xl ${item.size} w-full`}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110`}
                />
                <div 
                  className={`absolute inset-0 border-2 ${item.borderColor} rounded-2xl transition-all duration-300 group-hover:opacity-0`}
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)',
                  }}
                ></div>
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-background/90 backdrop-blur-sm p-4 rounded-lg w-full">
                    <h3 className="font-medium text-foreground">{item.alt}</h3>
                    <p className="text-sm text-muted-foreground">En savoir plus →</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
    </section>
  );
};

export default Activity;
