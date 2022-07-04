import React, { useEffect, useState } from 'react';
import './App.css';
import Select from 'react-select';

function App() {

  const [datas, setDatas] = useState([])
  const [userSelect, setUserSelect] = useState("")

  const handlerChange = (value) => {
    setUserSelect(value)
  }

  const getBerries = async () => {
    const berries = await fetch('https://pokeapi.co/api/v2/berry/');
    const value = await berries.json()
    const result = value.results.map((data) => {
      return {
        value: data.name,
        label: data.name
      }
    })
    const dataBerries = result.sort((a, b) => a.label.localeCompare(b.label))
    setDatas(dataBerries)
  }

  useEffect(() => {
    getBerries()
  }, [])

  return (
    <div className="App">
      <main className='container'>
        <h1>{userSelect}</h1>
        <Select options={datas} onChange={(e) => handlerChange(e.value)} />
      </main>
    </div>
  );
}

export default App;
