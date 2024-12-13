import { Bar } from 'react-chartjs-2';

const AgeChart = ({ ageDistribution }) => {
    if (!ageDistribution || Object.keys(ageDistribution).length === 0) {
        return (
            <p className="text-center text-gray-500 mt-4">
                No hay datos de edades disponibles.
            </p>
        );
    }

    // Generar colores en escala de azul dinámicamente
    const generateBlueScale = (count) => {
        const baseColor = [54, 162, 235]; // Azul base
        return Array.from({ length: count }, (_, i) => {
            const opacity = 0.5 + i * (0.4 / count); // Variar opacidad
            return `rgba(${baseColor[0]}, ${baseColor[1]}, ${baseColor[2]}, ${opacity.toFixed(2)})`;
        });
    };

    const labels = Object.keys(ageDistribution).map((age) => `${age} años`);
    const values = Object.values(ageDistribution);

    const blueScale = generateBlueScale(values.length);

    // Configuración de los datos
    const data = {
        labels,
        datasets: [
            {
                label: 'Número de Donantes',
                data: values,
                backgroundColor: blueScale,
                borderColor: blueScale.map((color) =>
                    color.replace(/0\.\d+\)$/, '1)')
                ), // Convertir a opacidad completa
                borderWidth: 1,
                borderRadius: 10, // Esquinas redondeadas
            },
        ],
    };

    // Opciones del gráfico
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: '#1e40af', // Azul oscuro
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                },
            },
            tooltip: {
                backgroundColor: 'rgba(255, 255, 255, 0.9)', // Fondo blanco para el tooltip
                titleColor: '#1e40af', // Azul oscuro para el título
                bodyColor: '#1d1d1d', // Texto negro para el cuerpo
                borderColor: '#cbd5e1', // Borde gris claro
                borderWidth: 1,
                cornerRadius: 6,
                callbacks: {
                    label: (tooltipItem) =>
                        `${tooltipItem.label}: ${tooltipItem.raw} donantes`,
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#1e40af', // Azul oscuro para las etiquetas
                    font: {
                        size: 12,
                        weight: 'bold',
                    },
                },
                grid: {
                    display: false, // Sin líneas de cuadrícula
                },
            },
            y: {
                ticks: {
                    stepSize: 50, // Incrementos de 50
                    color: '#1e40af', // Azul oscuro para las etiquetas
                    font: {
                        size: 12,
                        weight: 'bold',
                    },
                },
                grid: {
                    color: 'rgba(203, 213, 224, 0.3)', // Líneas de cuadrícula suaves
                },
                title: {
                    display: true,
                    text: 'Cantidad de Donantes',
                    color: '#1e40af', // Azul oscuro para el título
                    font: {
                        size: 16,
                        weight: 'bold',
                    },
                },
            },
        },
    };

    return (
        <div className="p-6 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl shadow-xl">
            <h2 className="text-2xl font-extrabold text-center mb-6 text-gray-800 dark:text-gray-100 tracking-wide">
                Distribución de Edades
            </h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default AgeChart;
