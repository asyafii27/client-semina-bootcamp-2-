import { useState } from 'react';
import './App.css';
import Input from './components/Input';

function App() {
  const [number, setNumber] = useState(0);
  const [form, setForm] = useState({
    name: '',
    usia: '',
    tahunLahir: ''
  });

  const [error, setError] = useState('');


  const klik = () => {
    setNumber(number + 1);
    console.log(number);
  };

  const handleSubmit = () => {
    if (form.name === "") {
      setError('Field tidak boleh kosong');
    } else if (form.tahunLahir == '') {
      setError('Tahun tidak boleh kosong')
    } else {
      const usia = 2025 - parseInt(form.tahunLahir);
      setForm({ ...form, usia });
    }
  };

  const handleChange = (e) => {
    setError('');
    if (e.target.name === 'name') {
      console.log('cek nama' + e.target.value.length);
      if (e.target.value.length < 3) {
        console.log('cek nama2');
        setError('Minimal 3 karakter');
      }
    }
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  return (
    <>
      <h1>Counter App</h1>
      <p>Nilai Counter saat ini: {number}</p>
      <button onClick={klik}>Tambah</button>

      <hr />
      <h1>Aplikasi Input Data Diri</h1>

      <label>Nama</label>
      <Input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <br />

      <label>Tahun Lahir</label>
      <Input
        type="number"
        name="tahunLahir"
        value={form.tahunLahir}
        onChange={handleChange}
      />
      <br />
      <br />

      <p>Umur saya: {form.usia}</p>
      <button type="submit" onClick={handleSubmit}>Submit</button>
      <p style={{color: 'red'}}>{error}</p>
    </>
  );
}

export default App;
