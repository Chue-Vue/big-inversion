import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
        firstName="Chue"
        lastName="Vue"
        age="32"
        hairColor="Black"
      />
      <PersonCard 
        firstName="Rosey"
        lastName="Lee"
        age="26"
        hairColor="Black"
      />
      <PersonCard 
        firstName="Aslan"
        lastName="Vue"
        age="0"
        hairColor="Black"
      />
      <PersonCard 
        firstName="BaeMax"
        lastName="Vue"
        age="2"
        hairColor="White"
      />
    </div>
  );
}

export default App;
