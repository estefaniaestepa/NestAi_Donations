import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import fondoImagen from '../assets/media/image/home.jpg';

const HomePage = () => {
  const scrollToContent = () => {
    document.getElementById("content").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sección fija con imagen, título y botón */}
      <div
        className="relative h-screen w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${fondoImagen})`,
        }}
      >
        {/* Capa de oscurecimiento */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Contenido central */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 animate-pulse">
          <h1 className="text-6xl font-extrabold text-white mb-6 tracking-wide">
            Fundraising <span className="text-blue-500">&</span> Marketing
          </h1>
          <h2 className="text-4xl font-bold text-white mb-8">
            para ONG
          </h2>
          <button
            onClick={scrollToContent}
            className="bg-white text-blue-600 px-8 py-4 rounded-full shadow-lg flex items-center justify-center space-x-3 hover:bg-blue-600 hover:text-white transition-transform duration-300 transform hover:scale-110"
          >
            <span className="font-semibold">Descubre más</span>
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Sección desplazable */}
      <div
        id="content"
        className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-8 py-16 text-center space-y-8"
      >
        <h1 className="text-6xl font-bold text-blue-600 dark:text-blue-400 tracking-wide">
          NestAI
        </h1>
        <h2 className="text-4xl font-semibold">
          Transformamos la Innovación en Impacto Social
        </h2>
        <p className="text-lg max-w-3xl mx-auto">
          Trabajamos junto a las ONG, guiándolas hacia el cumplimiento de sus metas, adaptándonos a su lenguaje y maximizando el uso de sus recursos.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
