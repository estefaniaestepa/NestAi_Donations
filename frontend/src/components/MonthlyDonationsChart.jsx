import React from 'react';
import { Line } from 'react-chartjs-2';

const MonthlyDonationsChart = ({ monthlyDonations = {} }) => {
  // Manejar caso donde no hay datos
  if (!monthlyDonations || Object.keys(monthlyDonations).length === 0) {
    return (
      <p className="text-center text-gray-500 mt-6 text-lg font-semibold">
        No hay datos de donaciones mensuales disponibles.
      </p>
    );
  }

  // Configuración de los datos
  const data = {
    labels: Object.keys(monthlyDonations), // Meses
    datasets: [
      {
        label: 'Donaciones Mensuales',
        data: Object.values(monthlyDonations), // Cantidades de donaciones
        borderColor: 'rgba(78, 115, 223, 1)', // Azul moderno
        backgroundColor: 'rgba(78, 115, 223, 0.2)', // Azul claro para el área bajo la línea
        pointBackgroundColor: 'rgba(78, 115, 223, 1)', // Color de los puntos
        pointBorderColor: '#ffffff', // Borde blanco en los puntos
        pointHoverBackgroundColor: '#ffffff', // Fondo blanco al pasar el mouse
        pointHoverBorderColor: 'rgba(78, 115, 223, 1)', // Borde azul moderno al pasar el mouse
        pointRadius: 5, // Tamaño de los puntos
        pointHoverRadius: 8, // Tamaño de los puntos al pasar el mouse
        borderWidth: 3,
        tension: 0.4, // Suavizado de la línea
        fill: true, // Rellenar debajo de la línea
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
          color: '#4e73df', // Azul moderno
          font: {
            size: 16,
            weight: 'bold',
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Fondo blanco para el tooltip
        titleColor: '#4e73df', // Título en azul
        bodyColor: '#1d1d1d', // Texto en negro
        borderColor: '#d1d1d1', // Borde gris claro
        borderWidth: 1,
        cornerRadius: 6,
        callbacks: {
          label: (tooltipItem) =>
            `Donaciones: €${tooltipItem.raw.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#4e73df', // Azul moderno
          font: {
            size: 14,
            weight: 'bold',
          },
        },
        grid: {
          display: false, // Sin líneas de cuadrícula
        },
      },
      y: {
        ticks: {
          color: '#4e73df', // Azul moderno
          font: {
            size: 14,
            weight: 'bold',
          },
          callback: (value) => `€${value.toLocaleString()}`, // Formato de valores
        },
        grid: {
          color: 'rgba(234, 236, 244, 0.7)', // Líneas de cuadrícula suaves
          borderDash: [5, 5], // Líneas punteadas
        },
        title: {
          display: true,
          text: 'Cantidad Donada (€)',
          color: '#4e73df', // Título del eje en azul
          font: {
            size: 16,
            weight: 'bold',
          },
        },
      },
    },
    animations: {
      tension: {
        duration: 1000,
        easing: 'easeOutQuart',
        from: 0.4,
        to: 0.6,
        loop: true,
      },
    },
  };

  return (
    <div className="p-6 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl shadow-xl">
      <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800 dark:text-gray-100 tracking-wide">
        Donaciones Mensuales
      </h2>
      <div className="animate-fade-in">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default MonthlyDonationsChart;
