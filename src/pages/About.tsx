import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Users } from 'lucide-react';

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
          <p className="text-gray-600 mb-6">
            Etudiant-Ingénieur en énergies renouvelables (CentraleSupélec - KTH), 
            photographe par passion.
            <br />
            <br />
            Formé à CentraleSupélec (Pics), je capture les histoires invisibles 
            qui se cachent dans les rues, les paysages et les moments éphémères. 
            Mon objectif : sublimer l'instant et révéler ce qui échappe au 
            premier regard.
            <br />
            <br />
            La photographie m'a appris à voir différemment. Chaque cliché est une 
            exploration : des rues de Paris aux forêts suédoises, des événements 
            éphémères aux paysages intemporels. J'aime capturer ce moment suspendu 
            où la réalité bascule vers quelque chose de plus grand, de plus mystérieux.
            <br />
            <br />
            Bienvenue dans mon univers visuel.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <Camera className="w-8 h-8 mx-auto text-gray-700" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">Domaine</h3>
              <p className="mt-1 text-sm text-gray-500">Photos de rue, paysage, événementiel</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto text-gray-700" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">Clients</h3>
              <p className="mt-1 text-sm text-gray-500">50+ projets réalisés</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}