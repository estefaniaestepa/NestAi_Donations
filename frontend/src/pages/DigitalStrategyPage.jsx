import React from 'react';
import backgroundImage from '../assets/media/image/strategy.jpg';
import gifSrc from '../assets/media/videos/strategy.gif';

const DigitalStrategyPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition duration-300">
      {/* Sección de encabezado */}
      <div
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white space-y-4">
          <h1 className="text-5xl font-bold">Estrategia Digital</h1>
          <p className="text-lg">
            Llevamos tu negocio al siguiente nivel con estrategias digitales innovadoras.
          </p>
        </div>
      </div>

      {/* Sección de texto principal */}
      <div className="p-8 space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Email Marketing para ONGs: Claves para Campañas que Generan Impacto
          </h1>
          <p className="text-lg mb-6">
            Diseñamos estrategias digitales personalizadas para potenciar tu negocio en el mundo en línea.
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Interpretación de métricas para la toma de decisiones estratégicas</li>
            <li>Medición y análisis de resultados</li>
            <li>Transformación digital</li>
            <li>Herramientas de seguimiento y análisis de datos</li>
          </ul>
        </div>

        {/* GIF */}
        <div className="flex items-center justify-center mt-10">
          <img
            src={gifSrc}
            alt="Estrategia Digital"
            className="w-[50%] max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Importancia del email marketing */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Importancia del email marketing para ONGs</h2>
          <p className="text-lg">
            El email marketing se ha convertido en una herramienta fundamental para las ONGs en la actualidad. A través del correo
            electrónico, estas organizaciones pueden mantener una comunicación directa y personalizada con sus seguidores, donantes y
            voluntarios.
          </p>
          <h2 className="text-3xl font-bold">Beneficios del email marketing en ONGs</h2>
          <p className="text-lg">
            Al diseñar campañas efectivas y atractivas, las ONGs pueden motivar a los destinatarios a contribuir económicamente a sus
            proyectos y programas, alcanzando una audiencia global de manera instantánea.
          </p>
        </div>

        {/* Sección de estadísticas */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Estadísticas sobre el impacto del email marketing</h2>
          <p className="text-lg">
            Según un estudio, el 65% de las ONGs considera al email marketing como la táctica más efectiva para la recaudación de fondos.
            Además, el ROI promedio del email marketing para ONGs es de $38 por cada dólar invertido.
          </p>
          <p className="text-lg">
            El 78% de los donantes prefieren recibir actualizaciones a través de correos electrónicos, destacando la importancia del email
            marketing en la construcción de relaciones significativas.
          </p>
        </div>

        {/* Biblioteca de impacto */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Biblioteca de Impacto: Archivar y Reutilizar Historias</h2>
          <p className="text-lg">
            El storytelling permite transmitir el impacto de las acciones realizadas, generar empatía y conectar con audiencias
            comprometidas. Archivar estas historias ayuda a las ONGs a documentar y reutilizar narrativas para estrategias futuras.
          </p>
          <p className="text-lg">
            Estas historias también pueden demostrar la efectividad de los programas, generar confianza y servir como herramientas de
            aprendizaje interno para el equipo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalStrategyPage;


