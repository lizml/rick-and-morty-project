import React from 'react';
import './App.css';
import Card from './card'

function App() {
  return (
    <div className="App">
      <Card
      photo = "https://www.kindpng.com/picc/m/102-1022311_transparent-rick-and-morty-clipart-rick-and-morty.png"
      name = "Rick"
      status = "alive"
      location = "Earth"
      episode = {16}
      />
    </div>
  );
}

export default App;
