"use client"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    title: "Call Center",
    description: "Service client professionnel et gestion des appels pour optimiser la relation avec vos clients.",
    image: "/logo/call.jpg",
    category: "Support",
    features: [
      "Service client 24/7",
      "Gestion des appels entrants/sortants",
      "Support multilingue",
      "Rapports et analyses détaillés",
    ],
  },
  {
    title: "Développement Web",
    description: "Création de sites web sur mesure et applications web performantes pour votre entreprise.",
    image: "/logo/dev.jpg",
    category: "Technologie",
    features: ["Sites vitrines", "E-commerce", "Applications web sur mesure", "Maintenance et support"],
  },
  {
    title: "Marketing Digital",
    description:
      "Stratégies de marketing numérique sur mesure pour booster votre présence en ligne et atteindre votre public cible.",
    image: "/logo/marketing.png",
    category: "Marketing",
    features: ["Stratégie de contenu", "Publicité en ligne", "Optimisation SEO", "Marketing des médias sociaux"],
  },
  {
    title: "Commercial",
    description: "Solutions commerciales innovantes pour développer votre entreprise et atteindre de nouveaux marchés.",
    image: "/logo/commercial.jpg",
    category: "Ventes",
    features: ["Stratégie commerciale", "Développement client", "Négociation", "Gestion de la relation client"],
  },
  {
    title: "Événementiel",
    description: "Organisation et gestion complète d'événements mémorables qui marquent les esprits.",
    image: "/logo/family.png",
    category: "Événements",
    features: [
      "Planification d'événements",
      "Gestion logistique",
      "Communication événementielle",
      "Animation et divertissement",
    ],
  },
  {
    title: "Conseil en Stratégie",
    description: "Expertise en stratégie d'entreprise pour vous aider à atteindre vos objectifs commerciaux.",
    image: "/logo/logo.png",
    category: "Conseil",
    features: ["Analyse de marché", "Stratégie d'entreprise", "Optimisation des processus", "Innovation et croissance"],
  },
]

const Service = () => {
  return (
    <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <Badge variant="secondary" className="mb-2">
            <Sparkles className="w-3 h-3 mr-1" />
            Nos Services
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            Des solutions adaptées à{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              vos besoins
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Découvrez notre gamme complète de services conçus pour propulser votre entreprise vers le succès.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden border-border/50 hover:border-orange-200 hover:shadow-xl transition-all duration-300">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <Badge variant="secondary" className="absolute top-4 left-4 z-20 bg-background/90 backdrop-blur-sm">
                    {service.category}
                  </Badge>
                </div>

                {/* Content Section */}
                <CardHeader className="space-y-2">
                  <CardTitle className="text-2xl group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button variant="ghost" className="w-full group/btn hover:bg-orange-50 hover:text-orange-600">
                    En savoir plus
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20"
        >
          <Card className="border-2 border-orange-100 bg-gradient-to-br from-orange-50/50 via-amber-50/30 to-background overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black)] opacity-10" />
            <CardContent className="relative p-8 sm:p-12 text-center space-y-6">
              <div className="space-y-3">
                <h3 className="text-3xl sm:text-4xl font-bold text-balance">Prêt à démarrer votre projet ?</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                  Notre équipe d'experts est prête à vous accompagner dans la réalisation de vos objectifs. Discutons de
                  votre vision.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Contactez-nous
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Voir nos réalisations
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default Service
