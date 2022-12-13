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

export default App;
