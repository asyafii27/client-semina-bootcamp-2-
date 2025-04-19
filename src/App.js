import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import Button from './componets/Button';

function App() {
  const [number, setNumber] = useState(0);
  const {name, setName} = useState("");
  const [age, setAge] = useState(0);

  const klik = () => {
    setNumber(number + 1);

    console.log(number);
  };

  return (
    <>
      <h1>Counter App</h1>
      <p>Nilai Counter saat ini {number}</p>
      <button onClick={klik}>Tambah</button>

      <hr/>
      <h1>Aplikasi Input data diri</h1>
      <label>Nama</label>
      <input type="text" value={{name}}/>
      <label>Usia</label>
      <input type="number" value={{tahunLahir}}/>
    </>
  );
}

export default App;
