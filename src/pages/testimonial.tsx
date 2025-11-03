import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  content: string;
  stats: {
    value: string;
    label: string;
  };
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jean Dupont',
    role: 'PDG, Entreprise XYZ',
    image: '/ds/FB_IMG_1762081092863.jpg',
    rating: 5,
    content: 'DS Group a révolutionné notre stratégie digitale. Leur approche créative et leurs solutions sur mesure ont considérablement augmenté notre visibilité en ligne.',
    stats: {
      value: '250+',
      label: 'Clients satisfaits'
    }
  },
  {
    id: 2,
    name: 'Marie Martin',
    role: 'Responsable Marketing',
    image: '/ds/FB_IMG_1762081184443.jpg',
    rating: 5,
    content: 'Un service exceptionnel avec une équipe à l\'écoute. Leur expertise en communication a permis à notre marque de se démarquer sur le marché.',
    stats: {
      value: '15+',
      label: 'Années d\'expérience'
    }
  },
  {
    id: 3,
    name: 'Thomas Leroy',
    role: 'Directeur Commercial',
    image: '/ds/FB_IMG_1762081423025.jpg',
    rating: 4,
    content: 'Leur équipe a su comprendre nos besoins et livrer des résultats concrets. Un partenaire de confiance pour notre développement commercial.',
    stats: {
      value: '98%',
      label: 'Taux de satisfaction'
    }
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-border/50">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12 border-2 border-orange-300">
                <AvatarImage className='p-2' src={testimonial.image} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium text-foreground">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground/30'}`} 
                />
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-muted-foreground italic">"{testimonial.content}"</p>
        </CardContent>
        <CardFooter className="border-t border-border/50 bg-muted/10 p-4">
          <div className="text-center w-full">
            <p className="text-2xl font-bold text-orange-400">{testimonial.stats.value}</p>
            <p className="text-sm text-muted-foreground">{testimonial.stats.label}</p>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Testimonialsection = () => {
  return (
    <main className="py-20 md:py-28 bg-gradient-to-b from-yellow-50/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-signature text-orange-300 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits et leur expérience avec DS Group
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Statistiques supplémentaires */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { value: '15+', label: 'Années d\'expérience' },
            { value: '500+', label: 'Projets réalisés' },
            { value: '98%', label: 'Clients satisfaits' }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 bg-background rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-4xl font-bold text-orange-400 mb-2">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Testimonialsection;
