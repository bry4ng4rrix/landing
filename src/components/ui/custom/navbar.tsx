import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X } from 'lucide-react';
import { Button } from "../button";

type NavItem = {
  name: string;
  link: string;
};

const navItems: NavItem[] = [
  { name: 'Accueil', link: '#' },
  { name: 'Activités', link: '#activity' },
  { name: 'Services', link: '#service' },
  { name: 'À propos', link: '#about' },
  { name: 'Recrutement', link: '#recruitment' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/50 backdrop-blur-xl shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <span className="text-2xl font-signature text-orange-300">DS</span>
            <span className="text-foreground text-xl font-delius font-medium hidden sm:inline">Group</span>
          </a>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="px-4 py-2 text-sm font-medium font-delius text-foreground/80 hover:text-orange-400 transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
              </a>
            ))}
          </nav>

          {/* Boutons d'action */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full text-foreground/70 hover:bg-orange-50 hover:text-orange-500"
              aria-label="Rechercher"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 font-medium transition-all duration-300 hover:shadow-lg"
            >
              Contact
            </Button>
          </div>

          {/* Bouton Menu Mobile */}
          <button 
            className="md:hidden p-2 text-foreground/80 hover:text-orange-500 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-sm overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="block px-4 py-3 text-foreground/80 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2 border-t border-border/50 mt-2">
                <Button 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-3 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Nous contacter
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
