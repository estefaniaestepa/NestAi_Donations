import React from 'react';
import gifSrc from '../assets/media/videos/ai.gif'; // Importar el video como módulo

const AIPage = () => {
  const scrollToForm = () => {
    document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition duration-300">
      {/* Primer Bloque */}
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-gray-900 relative">
        <h1
          className="text-8xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent animate-fade-in-down"
          style={{
            lineHeight: '1.2', // Ajuste para evitar recorte vertical
            overflow: 'visible', // Asegura que no se recorte el texto
            paddingBottom: '0.5rem', // Espaciado adicional
            display: 'inline-block', // Tratamiento como bloque
          }}
        >
          Inteligencia Artificial
        </h1>
        <h1
          className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent animate-fade-in-down"
          style={{
            lineHeight: '1.2',
            overflow: 'visible',
            display: 'inline-block',
          }}
        >
          para ONG
        </h1>
        <p className="text-lg mb-8 text-white animate-fade-in">
          Acompañamos a las entidades sociales para incorporar soluciones tecnológicas y de Inteligencia Artificial
          a sus estrategias de marketing y fundraising.
        </p>
        <button
          onClick={scrollToForm}
          className="bg-white text-blue-600 px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
        >
          Accede al Formulario
        </button>
      </div>

      {/* GIF con mensaje central */}
      <div className="relative">
        <img
          src={gifSrc}
          alt="Analysis Animation"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-8">
          <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent animate-fade-in-down">
            AcademAI
          </h1>
          <p className="text-lg mb-4 text-white animate-fade-in">by NestAI</p>
          <p className="text-lg mb-4 text-white animate-fade-in">
            <strong>
              Ponemos a tu alcance las herramientas de Inteligencia Artificial que mejor se adaptan al ecosistema de tu
              entidad.
            </strong>
          </p>
          <p className="text-lg text-white animate-fade-in">
            La Inteligencia Artificial está transformando el Tercer Sector. Descubre cómo puedes implementarla con nuestras herramientas personalizadas.
          </p>
        </div>
      </div>

      {/* Sección del Formulario */}
      <div id="form-section" className="p-8 flex flex-col lg:flex-row lg:items-start lg:space-x-8 bg-gray-900">
        {/* Descripción adicional */}
        <div className="flex-1 text-lg space-y-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
            Desbloquea el Poder de la IA
          </h2>
          <p className="text-white">
            Aceleramos las habilidades de los equipos de tu entidad para que apliquen herramientas de IA en marketing y fundraising.
          </p>
          <p className="text-white">
            Agenda una reunión con nuestro equipo para analizar tus necesidades y ofrecerte soluciones personalizadas.
          </p>
        </div>

        {/* Formulario */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl flex-1">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
            Agenda tu Reunión
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:border-blue-500 focus:ring focus:ring-blue-500"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:border-blue-500 focus:ring focus:ring-blue-500"
                placeholder="Ingresa tu email"
              />
            </div>
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-white">
                Organización
              </label>
              <input
                type="text"
                id="organization"
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:border-blue-500 focus:ring focus:ring-blue-500"
                placeholder="Nombre de la organización"
              />
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="mr-2"
              />
              <label htmlFor="terms" className="text-sm text-white">
                Acepto los términos y condiciones
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AIPage;
