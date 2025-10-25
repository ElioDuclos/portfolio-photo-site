import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">
          À Propos
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          Passionné par la photographie depuis plus de 15 ans
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5"
            alt="Photographe au travail"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6">
            Mon Approche
          </h2>
          <p className="text-gray-600 mb-6">
            Je crois en la puissance de l'image pour raconter des histoires uniques et capturer
            l'essence de chaque moment. Ma passion pour la photographie m'a conduit à explorer
            différents styles et techniques, toujours à la recherche de la perfection dans
            chaque cliché.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <Camera className="w-8 h-8 mx-auto text-gray-700" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">Expertise</h3>
              <p className="mt-1 text-sm text-gray-500">15+ années d'expérience</p>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 mx-auto text-gray-700" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">Récompenses</h3>
              <p className="mt-1 text-sm text-gray-500">Multiples prix internationaux</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto text-gray-700" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">Clients</h3>
              <p className="mt-1 text-sm text-gray-500">500+ projets réalisés</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}