import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';

const App = () => {
  
  const [sWCharacters, setSWCharacters] = useState([])

  useEffect (() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        setSWCharacters(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">List of the galaxy's most annoying</h1>
      {sWCharacters.map(info => (
      <Character 
      info={info} 
      key={info.name}
      gender={info.gender}
      />)
      )}

    </div>
  );
}

export default App;
