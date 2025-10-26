import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Twitter } from 'lucide-react';

export default function Contact() {

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

      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-50 p-8 rounded-lg max-w-md w-full"
        >
          <h2 className="text-2xl font-light text-gray-900 mb-6">
            Informations de Contact
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-gray-600" />
              <a href="mailto:elioduclos@gmail.com" className="text-gray-600 hover:text-gray-900 transition">
                elioduclos@gmail.com
              </a>
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
      </div>
    </div>
  );
}