import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Services', href: '#service' },
    { name: 'Activités', href: '#activity' },
    { name: 'Témoignages', href: '#testimonial' },
  ];

  const contactInfo = [
    { icon: <Mail className="w-5 h-5 text-orange-500" />, text: 'contact@dsgroup.com' },
    { icon: <Phone className="w-5 h-5 text-orange-500" />, text: '+33 1 23 45 67 89' },
    { icon: <MapPin className="w-5 h-5 text-orange-500" />, text: '123 Rue de la République, 75001 Paris' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-signature text-orange-300">DS</span>
              <span className="text-xl font-delius font-medium text-white">Group</span>
            </div>
            <p className="text-gray-400 text-sm">
              Votre partenaire de confiance pour des solutions innovantes et personnalisées.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:bg-gray-800 hover:text-orange-500 h-9 w-9"
                  asChild
                >
                  <a href={item.href} aria-label={item.label}>
                    {item.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Liens rapides */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Liens Rapides</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start px-0 text-gray-400 hover:text-orange-500 hover:bg-transparent"
                    asChild
                  >
                    <a href={link.href}>
                      {link.name}
                    </a>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-800 text-orange-500">
                    {React.cloneElement(item.icon, { className: 'h-4 w-4' })}
                  </span>
                  <span className="text-sm text-gray-400 flex-1">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-sm text-gray-400">
              Abonnez-vous à notre newsletter pour recevoir nos dernières actualités.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Votre email" 
                className="flex-1 bg-white text-gray-900 focus-visible:ring-orange-500"
              />
              <Button 
                type="submit" 
                className="bg-orange-600 hover:bg-orange-700"
              >
                S'inscrire
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            {currentYear} DS Group. Tous droits réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="link" className="text-gray-400 hover:text-orange-500 h-auto p-0" asChild>
              <a href="#">Politique de confidentialité</a>
            </Button>
            <Button variant="link" className="text-gray-400 hover:text-orange-500 h-auto p-0" asChild>
              <a href="#">Conditions d'utilisation</a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;