import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Camera, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Camera className="h-8 w-8" />
                <span className="text-xl font-light">Studio</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-black transition">Accueil</Link>
              <Link to="/about" className="text-gray-700 hover:text-black transition">À Propos</Link>
              <Link to="/contact" className="text-gray-700 hover:text-black transition">Contact</Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-black"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-black transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-black transition"
                onClick={() => setIsMenuOpen(false)}
              >
                À Propos
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-black transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </nav>

      <main className="pt-16">
        <Outlet />
      </main>

      <footer className="bg-white border-t mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Studio Photo. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}