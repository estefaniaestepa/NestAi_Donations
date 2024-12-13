import React, { useState } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';
import extraImage from '../assets/media/image/marketing.jpg'; // Verifica la ruta

const DigitalMarketingPage = () => {
  const [formData, setFormData] = useState({
    reason: '',
    satisfaction: '',
    update_preference: '',
    appreciation: '',
    content_preference: '',
    other_reason: '',
    other_content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/feedback', formData);
      toast.success('¡Formulario enviado exitosamente!');
      setFormData({
        reason: '',
        satisfaction: '',
        update_preference: '',
        appreciation: '',
        content_preference: '',
        other_reason: '',
        other_content: '',
      });
    } catch (error) {
      toast.error('Error al enviar el formulario.');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8 pt-20 transition duration-300">
      {/* Encabezado */}
      <header className="text-center mb-10">
        <h1 className="text-7xl font-extrabold mb-6 text-blue-600 dark:text-blue-400">Marketing Digital</h1>
        <p className="text-lg">
          Encuentra las estrategias perfectas para impulsar tus campañas y lograr un mayor impacto.
        </p>
      </header>

      {/* Contenido Principal */}
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Imagen */}
        <div className="lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
          <img
            src={extraImage}
            alt="Digital Marketing"
            className="rounded-lg shadow-lg w-full lg:w-4/5"
          />
        </div>

        {/* Encuesta */}
        <div className="lg:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-6 transition duration-300"
          >
            <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400">
              Encuesta de Satisfacción
            </h2>

            {/* Pregunta 1 */}
            <div>
              <label className="block text-lg font-semibold mb-2">
                ¿Qué te motivó a donar a nuestra causa?
              </label>
              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="Interés en ayudar a la causa específica.">
                  Interés en ayudar a la causa específica.
                </option>
                <option value="Valores personales de solidaridad.">Valores personales de solidaridad.</option>
                <option value="Referencia de alguien cercano.">Referencia de alguien cercano.</option>
                <option value="Otro">Otro</option>
              </select>
              {formData.reason === 'Otro' && (
                <input
                  type="text"
                  name="other_reason"
                  placeholder="Especifica"
                  value={formData.other_reason}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border rounded-lg bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                />
              )}
            </div>

            {/* Pregunta 2 */}
            <div>
              <label className="block text-lg font-semibold mb-2">
                ¿Qué tan satisfecho estás con la información que recibes sobre cómo se usan tus donaciones?
              </label>
              <select
                name="satisfaction"
                value={formData.satisfaction}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="Muy satisfecho">Muy satisfecho</option>
                <option value="Satisfecho">Satisfecho</option>
                <option value="Insatisfecho">Insatisfecho</option>
                <option value="Muy insatisfecho">Muy insatisfecho</option>
              </select>
            </div>

            {/* Pregunta 3 */}
            <div>
              <label className="block text-lg font-semibold mb-2">
                ¿Prefieres recibir actualizaciones sobre el impacto de tu donación?
              </label>
              <select
                name="update_preference"
                value={formData.update_preference}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="Correo electrónico">Correo electrónico</option>
                <option value="Redes sociales">Redes sociales</option>
                <option value="Mensajes personalizados">Mensajes personalizados</option>
                <option value="No me interesa recibir actualizaciones">
                  No me interesa recibir actualizaciones
                </option>
              </select>
            </div>

            {/* Pregunta 4 */}
            <div>
              <label className="block text-lg font-semibold mb-2">
                ¿Qué tan importante es para ti recibir agradecimientos personalizados?
              </label>
              <select
                name="appreciation"
                value={formData.appreciation}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="Muy importante">Muy importante</option>
                <option value="Algo importante">Algo importante</option>
                <option value="Poco importante">Poco importante</option>
                <option value="No es importante">No es importante</option>
              </select>
            </div>

            {/* Pregunta 5 */}
            <div>
              <label className="block text-lg font-semibold mb-2">
                ¿Qué tipo de contenido te gustaría recibir de nosotros?
              </label>
              <select
                name="content_preference"
                value={formData.content_preference}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="Historias personales de beneficiarios">
                  Historias personales de beneficiarios
                </option>
                <option value="Estadísticas e informes de impacto">Estadísticas e informes de impacto</option>
                <option value="Oportunidades para participar más activamente">
                  Oportunidades para participar más activamente
                </option>
                <option value="Otro">Otro</option>
              </select>
              {formData.content_preference === 'Otro' && (
                <input
                  type="text"
                  name="other_content"
                  placeholder="Especifica"
                  value={formData.other_content}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border rounded-lg bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                />
              )}
            </div>

            {/* Botón de Enviar */}
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700 transition transform hover:scale-105 w-full"
            >
              Enviar Encuesta
            </button>
          </form>
        </div>
      </div>

      {/* Texto Largo */}
      <section className="mt-16 max-w-6xl mx-auto space-y-8">
        <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">
        Importancia de las encuestas en impacto social: Fundamentos y alcance
        </h2>
        <p className="text-lg leading-relaxed mb-4">
        Al utilizar encuestas en la medición del impacto social, las organizaciones pueden obtener información detallada y significativa sobre la efectividad de sus acciones, identificar áreas de mejora, y comprender las experiencias y opiniones de las personas a las que buscan impactar. Esto permite una evaluación más completa y precisa del impacto de las actividades sociales, lo que a su vez facilita la toma de decisiones informadas y la mejora continua de las intervenciones.
        </p>
        <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">
        El uso estratégico de las encuestas en la medición del impacto social
        </h2>
        <p className="text-lg leading-relaxed mb-4">
        Las encuestas brindan la oportunidad de dar voz a las partes interesadas, incluyendo a beneficiarios, colaboradores y miembros de la comunidad, lo que contribuye a una evaluación más integral y participativa del impacto social. Al involucrar activamente a estas partes interesadas en el proceso de medición, las fundaciones no solo obtienen información relevante, sino que también fortalecen sus vínculos con la comunidad y fomentan la transparencia y la rendición de cuentas en sus operaciones.
        </p>
        <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">
        Implementación de metodologías innovadoras en la recolección y análisis de datos de encuestas
        </h2>
        <p className="text-lg leading-relaxed mb-4">
        La implementación de metodologías innovadoras en la recolección y análisis de datos de encuestas es esencial para mejorar la calidad y la relevancia de la información recopilada. El uso de técnicas como encuestas en línea, encuestas móviles, y la integración de inteligencia artificial en el análisis de datos, puede proporcionar una visión más detallada y actualizada del impacto social.
        </p>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;
