import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FaChartBar, FaArrowRight } from 'react-icons/fa';
import api from '../services/api';
import AnalysisTable from '../components/AnalysisTable';
import AgeChart from '../components/AgeChart';
import MonthlyDonationsChart from '../components/MonthlyDonationsChart';
import gifSrc from '../assets/media/videos/analysis.gif';

const AnalysisPage = () => {
    const [analysisData, setAnalysisData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const scrollToContent = () => {
        document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const fetchAnalysisData = async () => {
            try {
                const response = await api.get('/users/analysis');
                setAnalysisData(response.data);
                toast.success('Datos cargados exitosamente.');
            } catch (err) {
                setError('Error al cargar los datos.');
                toast.error('No se pudieron cargar los datos.');
            } finally {
                setLoading(false);
            }
        };

        fetchAnalysisData();
    }, []);

    if (loading) {
        return (
            <div className="text-center text-blue-600 dark:text-blue-400 transition duration-300">
                Cargando análisis...
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-600 dark:text-red-400 transition duration-300">
                {error}
            </div>
        );
    }

    return (
        <div className="relative min-h-screen">
            {/* GIF fijo en la parte superior */}
            <div className="fixed top-0 left-0 w-full h-screen z-0">
                <img
                    src={gifSrc}
                    alt="Analysis Animation"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                {/* Texto y botón encima del GIF */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 space-y-6">
                    <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
                        Innovación en Fundraising
                    </h1>
                    <p className="text-lg text-gray-200 max-w-3xl">
                        Te acompañamos en la creación de tu funnel de captación, paso a paso,
                        incorporando estrategias innovadoras a tu alcance.
                    </p>
                    <button
                        onClick={scrollToContent}
                        className="bg-white text-blue-600 px-8 py-4 rounded-full shadow-lg flex items-center justify-center space-x-3 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                        <span className="font-semibold">Descubre más</span>
                        <FaArrowRight />
                    </button>
                </div>
            </div>

            {/* Contenido desplazable */}
            <div
                id="content"
                className="relative z-10 mt-[100vh] p-10 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition duration-300"
            >
                {/* Título */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold flex items-center justify-center space-x-3 text-blue-800 dark:text-blue-400">
                        <FaChartBar />
                        <span>Análisis de Donaciones</span>
                    </h1>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">
                        Consulta los datos detallados de las donaciones.
                    </p>
                </div>

                {/* Tabla de Causas Más Populares */}
                <AnalysisTable
                    popularInterests={analysisData?.causes_count || {}}
                    totalDonated={analysisData?.total_amount_donated || 0}
                />

                {/* Gráfico de Distribución de Edades */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-400 mb-4">
                        Distribución por Edades
                    </h2>
                    <AgeChart ageDistribution={analysisData?.age_distribution || {}} />
                </div>

                {/* Gráfico de Donaciones Mensuales */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-400 mb-4">
                        Donaciones Mensuales
                    </h2>
                    <MonthlyDonationsChart
                        monthlyDonations={analysisData?.monthly_donations || {}}
                    />
                </div>
            </div>
        </div>
    );
};

export default AnalysisPage;

