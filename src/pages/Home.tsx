import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Gallery from '../components/Gallery';

export default function Home() {
  return (
    <div>
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16 px-4 sm:py-24 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Capturant l'essence des{' '}
            <span className="font-normal text-black">moments</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            Une collection de photographies uniques racontant des histoires visuelles
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex justify-center space-x-6"
        >
          <a
            href="#gallery"
            className="inline-flex items-center px-6 py-3 border border-black text-base font-medium rounded-md text-black hover:bg-black hover:text-white transition-all duration-300"
          >
            Voir la galerie
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-900 transition-all duration-300"
          >
            Me contacter
          </Link>
        </motion.div>
      </motion.header>

      <div id="gallery">
        <Gallery />
      </div>
    </div>
  );
}