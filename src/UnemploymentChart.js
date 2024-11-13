// File: UnemploymentChart.js
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

const UnemploymentChart = () => {
  const data = {
    labels: [
      'jan/14', 'fev/14', 'mar/14', 'abr/14', 'mai/14', 'jun/14', 'jul/14', 'ago/14', 'set/14', 'out/14', 'nov/14', 'dez/14',
      'jan/15', 'fev/15', 'mar/15', 'abr/15', 'mai/15', 'jun/15', 'jul/15', 'ago/15', 'set/15', 'out/15', 'nov/15', 'dez/15',
      'jan/16', 'fev/16', 'mar/16', 'abr/16', 'mai/16', 'jun/16', 'jul/16', 'ago/16', 'set/16', 'out/16', 'nov/16', 'dez/16',
      'jan/17', 'fev/17', 'mar/17', 'abr/17', 'mai/17', 'jun/17', 'jul/17', 'ago/17', 'set/17', 'out/17', 'nov/17', 'dez/17',
      'jan/18', 'fev/18', 'mar/18', 'abr/18', 'mai/18', 'jun/18', 'jul/18', 'ago/18', 'set/18', 'out/18', 'nov/18', 'dez/18',
      'jan/19', 'fev/19', 'mar/19', 'abr/19', 'mai/19', 'jun/19', 'jul/19', 'ago/19', 'set/19', 'out/19', 'nov/19', 'dez/19',
      'jan/20', 'fev/20', 'mar/20', 'abr/20', 'mai/20', 'jun/20', 'jul/20', 'ago/20', 'set/20', 'out/20', 'nov/20', 'dez/20',
      'jan/21', 'fev/21', 'mar/21', 'abr/21', 'mai/21', 'jun/21', 'jul/21', 'ago/21', 'set/21', 'out/21', 'nov/21', 'dez/21',
      'jan/22', 'fev/22', 'mar/22', 'abr/22', 'mai/22', 'jun/22', 'jul/22', 'ago/22', 'set/22', 'out/22', 'nov/22', 'dez/22',
      'jan/23', 'fev/23', 'mar/23', 'abr/23', 'mai/23', 'jun/23', 'jul/23', 'ago/23', 'set/23', 'out/23', 'nov/23', 'dez/23',
      'jan/24', 'fev/24', 'mar/24', 'abr/24', 'mai/24', 'jun/24', 'jul/24', 'ago/24'
    ], // Mês/Ano
    datasets: [
      {
        label: 'Desemprego (%)', // Título da linha
        data: [
          6.50, 6.80, 7.20, 7.20, 7.10, 6.90, 7.00, 7.00, 6.90, 6.70, 6.60, 6.60,
          6.90, 7.60, 8.00, 8.10, 8.30, 8.40, 8.70, 8.90, 9.00, 9.10, 9.10, 9.10,
          9.60, 10.30, 11.10, 11.30, 11.30, 11.40, 11.70, 11.90, 11.90, 11.90, 12.00, 12.20,
          12.70, 13.30, 13.90, 13.70, 13.40, 13.10, 12.90, 12.70, 12.50, 12.30, 12.10, 11.90,
          12.30, 12.70, 13.20, 13.00, 12.80, 12.60, 12.40, 12.30, 12.00, 11.90, 11.70, 11.70,
          12.20, 12.60, 12.80, 12.60, 12.40, 12.10, 12.00, 11.90, 11.90, 11.80, 11.30, 11.10,
          11.40, 11.80, 12.40, 12.70, 13.10, 13.60, 14.10, 14.80, 14.90, 14.60, 14.40, 14.20,
          14.50, 14.60, 14.90, 14.80, 14.70, 14.20, 13.70, 13.10, 12.60, 12.10, 11.60, 11.10,
          11.20, 11.20, 11.10, 10.50, 9.80, 9.30, 9.10, 8.90, 8.70, 8.30, 8.10, 7.90,
          8.40, 8.60, 8.80, 8.50, 8.30, 8.00, 7.90, 7.80, 7.70, 7.60, 7.50, 7.40,
          7.60, 7.80, 7.90, 7.50, 7.10, 6.90, 6.80, 6.60
        ], // Dados da taxa de desemprego
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
        text: 'Evolução da Taxa de Desemprego'
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.raw} %`; // Exibe o valor como percentual
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Ano-Mês'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Desemprego (%)'
        },
        ticks: {
          beginAtZero: false
        }
      }
    }
  };

  return (
    <div>
      <h2>Taxa de Desemprego ao Longo dos Anos</h2>
      <div style={{ width: '1000px', height: '600px' }}>
        <Line data={data} options={options} />
        <p style={{ textAlign: 'justify' }}>
          A taxa de desemprego é um dos indicadores econômicos mais importantes, refletindo a porcentagem da população ativa que está sem trabalho, mas à procura de emprego. Variações na taxa de desemprego indicam mudanças na saúde econômica de um país, sendo influenciada por fatores como crescimento econômico, políticas governamentais e crises globais, como a pandemia da COVID-19. A taxa de desemprego é um dos principais parâmetros utilizados por governos e instituições financeiras para tomar decisões sobre políticas econômicas e monetárias.
        </p>
      </div>
    </div>
  );
};

export default UnemploymentChart;
