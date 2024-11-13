// File: PIBChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Registrar os componentes do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PIBChart = () => {
  const data = {
    labels: [
      '2014.I', '2014.II', '2014.III', '2014.IV', '2015.I', '2015.II', '2015.III', '2015.IV',
      '2016.I', '2016.II', '2016.III', '2016.IV', '2017.I', '2017.II', '2017.III', '2017.IV',
      '2018.I', '2018.II', '2018.III', '2018.IV', '2019.I', '2019.II', '2019.III', '2019.IV',
      '2020.I', '2020.II', '2020.III', '2020.IV', '2021.I', '2021.II', '2021.III', '2021.IV',
      '2022.I', '2022.II', '2022.III', '2022.IV', '2023.I', '2023.II', '2023.III', '2023.IV',
      '2024.I', '2024.II'
    ], // Anos e trimestres
    datasets: [
      {
        label: 'Variação Percentual do PIB', // Título da linha
        data: [
          3.5, -0.4, -0.6, -0.2, -1.6, -2.7, -4.3, -5.5, -5.1, -3.2, -2.5, -2.3, 0.3, 0.8, 1.6, 2.6,
          1.9, 1.6, 2.1, 1.6, 0.9, 1.2, 1.1, 1.7, 0.4, -10.1, -3, -0.3, 1.7, 12.4, 4.2, 1.5, 1.5, 3.5, 
          4.3, 2.7, 4.2, 3.5, 2, 2.1, 2.5, 3.3
        ], // Dados de variação do PIB
        borderColor: 'rgba(75,192,192,1)', // Cor da linha
        backgroundColor: 'rgba(75,192,192,0.2)', // Cor de fundo da linha (opcional)
        fill: true, // Preenchimento da área abaixo da linha
        tension: 0.1 // Suavização da linha
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Variação Percentual do PIB ao Longo dos Trimestres'
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.raw}%`;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Ano-Trimestre'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Variação Percentual (%)'
        },
        ticks: {
          beginAtZero: false
        }
      }
    }
  };

  return (
    <div>
      <h2>Variação Percentual do PIB ao Longo dos Trimestres</h2>
      <div style={{ width: '800px', height: '600px' }}>
        <Line data={data} options={options} />
        <p style={{ textAlign: 'justify' }}>
          O PIB (Produto Interno Bruto) é a soma de todos os bens e serviços produzidos em um país em um determinado período de tempo. A variação percentual do PIB mostra como a economia cresceu ou diminuiu em relação ao trimestre anterior.
          Entre 2014 e 2024, o Brasil passou por diversas variações no PIB, com períodos de crescimento e recessão. Por exemplo, em 2020, o PIB sofreu uma grande queda devido à pandemia da COVID-19, com uma redução de 10,1% no segundo trimestre. Já em 2021, a economia teve uma recuperação, com um crescimento de 12,4% no segundo trimestre.
          Analisar a variação percentual do PIB ajuda a entender o desempenho da economia ao longo do tempo, permitindo que o governo e as empresas tomem decisões estratégicas baseadas nesse indicador.
        </p>
      </div>
    </div>
  );
};

export default PIBChart;
