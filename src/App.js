import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';
import Details from './components/Details';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [sWCharacters, setSWCharacters] = useState([])
  const [currentCharacter, setCurrentCharacter] = useState (null)

  const openDetails = name => {
    setCurrentCharacter(name)
  }

  const closeDetails = () => {
    setCurrentCharacter(null)
  }

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect (() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {sWCharacters.map(info => <Character info={info}/>)}
      {/* {
        currentCharacter && <Details characterName={currentCharacter} close={closeDetails} />
      } */}
    </div>
  );
}

export default App;
