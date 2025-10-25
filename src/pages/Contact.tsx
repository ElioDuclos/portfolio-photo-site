import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Twitter } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">
          Contact
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          Parlons de votre prochain projet
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-50 p-8 rounded-lg"
        >
          <h2 className="text-2xl font-light text-gray-900 mb-6">
            Informations de Contact
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-gray-600" />
              <span className="text-gray-600">contact@studio-photo.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-gray-600" />
              <span className="text-gray-600">+33 1 23 45 67 89</span>
            </div>
            
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Réseaux Sociaux
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900 transition"
            >
              Envoyer
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}