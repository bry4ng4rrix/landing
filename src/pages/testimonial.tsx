"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

type Testimonial = {
  id: number
  name: string
  role: string
  image: string
  rating: number
  content: string
  stats: {
    value: string
    label: string
  }
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jean Dupont",
    role: "PDG, Entreprise XYZ",
    image: "/ds/FB_IMG_1762081092863.jpg",
    rating: 5,
    content:
      "DS Group a révolutionné notre stratégie digitale. Leur approche créative et leurs solutions sur mesure ont considérablement augmenté notre visibilité en ligne.",
    stats: {
      value: "250+",
      label: "Clients satisfaits",
    },
  },
  {
    id: 2,
    name: "Marie Martin",
    role: "Responsable Marketing",
    image: "/ds/FB_IMG_1762081184443.jpg",
    rating: 5,
    content:
      "Un service exceptionnel avec une équipe à l'écoute. Leur expertise en communication a permis à notre marque de se démarquer sur le marché.",
    stats: {
      value: "15+",
      label: "Années d'expérience",
    },
  },
  {
    id: 3,
    name: "Thomas Leroy",
    role: "Directeur Commercial",
    image: "/ds/FB_IMG_1762081423025.jpg",
    rating: 4,
    content:
      "Leur équipe a su comprendre nos besoins et livrer des résultats concrets. Un partenaire de confiance pour notre développement commercial.",
    stats: {
      value: "98%",
      label: "Taux de satisfaction",
    },
  },
]

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="group relative h-full flex flex-col overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
        {/* Quote icon decoration */}
        <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
          <Quote className="h-20 w-20 text-primary" />
        </div>

        <CardHeader className="pb-6 relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Avatar className="h-14 w-14 border-2 border-primary/20 ring-4 ring-primary/5">
                  <AvatarImage
                    className="object-cover"
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                  />
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-primary rounded-full border-2 border-card flex items-center justify-center">
                  <svg className="h-3 w-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </div>

          {/* Rating stars */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 transition-all duration-300 ${
                  i < testimonial.rating ? "text-amber-500 fill-amber-500" : "text-muted-foreground/20"
                }`}
              />
            ))}
            <span className="ml-2 text-sm font-medium text-muted-foreground">{testimonial.rating}.0</span>
          </div>
        </CardHeader>

        <CardContent className="flex-1 relative z-10 pb-6">
          <p className="text-muted-foreground leading-relaxed text-pretty">{testimonial.content}</p>
        </CardContent>

        <CardFooter className="border-t border-border/40 bg-muted/30 backdrop-blur-sm p-6 relative z-10">
          <div className="flex items-center justify-between w-full">
            <div>
              <p className="text-3xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                {testimonial.stats.value}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{testimonial.stats.label}</p>
            </div>
            <Badge variant="secondary" className="bg--white text-orange-400 border-orange-200 hover:bg-orange-500 hover:text-orange-100">
              Vérifié
            </Badge>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

const Testimonialsection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
         
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-signature  mb-6 bg-gradient-to-br from-foreground/70 to-orange-300 bg-clip-text text-transparent text-balance">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-muted-foreground font-delius text-pretty">
            Découvrez les témoignages de nos clients satisfaits et leur expérience avec DS Group
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { value: "15+", label: "Années d'expérience", icon: "🏆" },
              { value: "500+", label: "Projets réalisés", icon: "🚀" },
              { value: "98%", label: "Clients satisfaits", icon: "⭐" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm p-8 text-center hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <p className="text-5xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent mb-3">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonialsection
