import './App.css'
import { Header } from './components/Header/Header'
import { Button } from './components/Button/Button';
import React from 'react';

function App() {
  const [currentNumber, setCurrentNumber] = React.useState(0);

  return (
    <>
      <Header />
      <h1>prueba</h1>
      <Button onClick={() => setCurrentNumber(currentNumber + 1) } />
      <p>Numero de veces presionado: {currentNumber}</p>
    </>
  );
}

export default App
