// File: TaxaSelicChart.js
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

const TaxaSelicChart = () => {
  const data = {
    labels: [
      "15/01/2014","26/02/2014",
      "02/04/2014","28/05/2014",
      "16/07/2014","03/09/2014",
      "29/10/2014","03/12/2014",
      "21/01/2015","04/03/2015",
      "29/04/2015","03/06/2015",
      "29/07/2015","02/09/2015",
      "21/10/2015","25/11/2015",
      "20/01/2016","02/03/2016",
      "27/04/2016","08/06/2016",
      "20/07/2016","31/08/2016",
      "19/10/2016","30/11/2016",
      "11/01/2017","22/02/2017",
      "12/04/2017","31/05/2017",
      "26/07/2017","06/09/2017",
      "25/10/2017","06/12/2017",
      "07/02/2018","21/03/2018",
      "16/05/2018","20/06/2018",
      "01/08/2018","19/09/2018",
      "31/10/2018","12/12/2018",
      "06/02/2019","20/03/2019",
      "08/05/2019","19/06/2019",
      "31/07/2019","18/09/2019",
      "30/10/2019","11/12/2019",
      "05/02/2020","18/03/2020",
      "06/05/2020","17/06/2020",
      "05/08/2020","16/09/2020",
      "28/10/2020","09/12/2020",
      "20/01/2021","17/03/2021",
      "05/05/2021","16/06/2021",
      "04/08/2021","22/09/2021",
      "27/10/2021","08/12/2021",
      "02/02/2022","16/03/2022",
      "04/05/2022","15/06/2022",
      "03/08/2022","21/09/2022",
      "26/10/2022","07/12/2022",
      "01/02/2023","22/03/2023",
      "03/05/2023","21/06/2023",
      "02/08/2023","20/09/2023",
      "01/11/2023","13/12/2023",
      "31/01/2024"

    ], // Datas das reuniões
    datasets: [
      {
        label: 'Taxa Selic (%)', // Título da linha
        data: [
          10.50,
          10.75,
          11,
          11,
          11,
          11,
          11.25,
          11.75,
          12.25,
          12.75,
          13.25,
          13.75,
          14.25,
          14.25,
          14.25,
          14.25,
          14.25,
          14.25,
          14.25,
          14.25,
          14.25,
          14.25,
          14,
          13.75,
          13,
          12.25,
          11.25,
          10.25,
          9.25,
          8.25,
          7.50,
          7,
          6.75,
          6.50,
          6.50,
          6.50,
          6.50,
          6.50,
          6.50,
          6.50,
          6.50,
          6.50,
          6.50,
          6.50,
          6,
          5.50,
          5,
          4.50,
          4.25,
          3.75,
          3,
          2.25,
          2,
          2,
          2,
          2,
          2,
          2.75,
          3.50,
          4.25,
          5.25,
          6.25,
          7.75,
          9.25,
          10.75,
          11.75,
          12.75,
          13.25,
          13.75,
          13.75,
          13.75,
          13.75,
          13.75,
          13.75,
          13.75,
          13.75,
          13.25,
          12.75,
          12.25,
          11.75,
          11.25
        ], // Dados da taxa Selic
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
        text: 'Evolução da Taxa Selic'
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
          text: 'Data da Reunião'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Taxa Selic (%)'
        },
        ticks: {
          beginAtZero: false
        }
      }
    }
  };

  return (
    <div>
      <h2>Taxa de Juros ao Longo do Tempo</h2>
      <div style={{ width: '800px', height: '550px' }}>
        <Line data={data} options={options} />
        <p style={{ textAlign: 'justify' }}>
        A taxa de juros no Brasil é a porcentagem que você paga a mais quando pega dinheiro emprestado ou o que você recebe a mais quando investe seu dinheiro. Ela é determinada pelo Banco Central e é uma ferramenta importante para controlar a economia. Quando a economia está crescendo muito e os preços estão subindo, o Banco Central pode aumentar a taxa de juros para tornar o crédito mais caro e diminuir o consumo. Já quando a economia está mais devagar, a taxa de juros pode ser reduzida para incentivar as pessoas a gastarem e investirem mais, ajudando a economia a crescer.
        </p>
      </div>
    </div>
  );
};

export default TaxaSelicChart;
