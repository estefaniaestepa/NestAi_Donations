import React from 'react';

const AnalysisTable = ({ popularInterests = {}, totalDonated = 0 }) => {
  return (
    <div className="p-8 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-200 shadow-lg rounded-lg transition duration-300">
      {/* Título */}
      <h2 className="text-2xl font-extrabold text-center mb-6 text-blue-800 dark:text-blue-400 tracking-wide">
        Causas Más Populares
      </h2>

      {/* Tabla */}
      <table className="w-full text-left border-collapse overflow-hidden rounded-lg shadow-md">
        <thead>
          <tr className="bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-white">
            <th className="p-4 font-semibold">Causa</th>
            <th className="p-4 font-semibold">Donaciones</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(popularInterests).map(([cause, count], index) => (
            <tr
              key={cause}
              className={`${
                index % 2 === 0
                  ? 'bg-blue-50 dark:bg-gray-800'
                  : 'bg-white dark:bg-gray-700'
              }`}
            >
              <td className="p-4 border-t border-gray-300 dark:border-gray-700">
                {cause}
              </td>
              <td className="p-4 border-t border-gray-300 dark:border-gray-700">
                {count.toLocaleString()} {/* Formato de número */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total */}
      <div className="mt-6 text-center">
        <h3 className="text-lg font-semibold">
          Monto Total Donado:{" "}
          <span className="text-blue-800 dark:text-blue-400">
            €{totalDonated.toFixed(2)}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default AnalysisTable;
