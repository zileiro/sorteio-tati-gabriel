import { useState } from 'react';
import './App.css';

const App = () => {
  const [num, setNum] = useState(0);

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
}
const handleClick = () => {
  setNum(randomNumber(1, 100));
}
return (
  <div className="container-home">
  <div className="title">
    <h1>Gerador de números aleatórios</h1>
      </div>
      <h2>Número Gerado : {num}</h2>
      <button onClick={handleClick}>Realizar Sorteio</button>
      </div>
      );
    }

export default App;
