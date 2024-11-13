// File: App.js
import React from 'react';
import IPCAChart from './IPCAChart';
import PIBChart from './PIBChart';
import TaxaSelicChart from './TaxaSelicChart';
import UnemploymentChart from './UnemploymentChart';

const App = () => {
  return (
    <div style={styles.container}>
      <h1>Visualização e explicação de índices econômicos através de uma aplicação web.</h1>
      <div style={styles.chartContainer}>
        <PIBChart />
      </div>
      <div style={styles.chartContainer}>
        <IPCAChart />
      </div>
      <div style={styles.chartContainer}>
        <TaxaSelicChart />
      </div>
      <div style={styles.chartContainer}>
        <UnemploymentChart />
      </div>
    </div>
  );
};

// Estilo para centralizar o conteúdo
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px', // Adiciona um padding para dar um pouco de espaço interno
  },
  chartContainer: {
    marginBottom: '0px',
  }
};

export default App;
