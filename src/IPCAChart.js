// File: IPCAChart.js
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

const IPCAChart = () => {
  const data = {
    labels: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023], // Anos
    datasets: [
      {
        label: 'IPCA (%)', // Título da linha
        data: [5.91, 6.41, 10.67, 6.29, 2.95, 3.75, 4.31, 4.52, 10.06, 5.79, 4.62], // Dados de IPCA
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
        text: 'Evolução do IPCA'
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.raw} %`;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Ano'
        }
      },
      y: {
        title: {
          display: true,
          text: 'IPCA (%)'
        },
        ticks: {
          beginAtZero: false
        }
      }
    }
  };

  return (
    <div>
      <h2>Inflação ao Longo dos Anos</h2>
      <div style={{ width: '800px', height: '600px' }}>
        <Line data={data} options={options} />
        <p style={{ textAlign: 'justify' }}>
        A inflação é o aumento geral e contínuo dos preços de bens e serviços em uma economia ao longo do tempo. Quando a inflação sobe, o poder de compra do dinheiro diminui, ou seja, você precisa de mais dinheiro para comprar as mesmas coisas. A inflação pode afetar todos, desde o custo da comida até o preço da gasolina.
        No Brasil, o principal indicador da inflação é o IPCA (Índice de Preços ao Consumidor Amplo). Esse índice mede a variação dos preços de um conjunto de produtos e serviços consumidos pelas famílias, como alimentos, transporte, saúde e educação. O IPCA é usado pelo Banco Central para tomar decisões sobre a economia e controlar a inflação. Quando o IPCA sobe demais, o Banco Central pode aumentar a taxa de juros para tentar controlar o aumento dos preços. Portanto, o IPCA é uma ferramenta importante para entender como a inflação está impactando o bolso dos brasileiros.
        </p>
      </div>
      
    </div>
  );
};

export default IPCAChart;
