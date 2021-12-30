import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Nav/Nav';
import Body from './Body/Body'

function App() {
  return (
    <div className="App">
        <NavBar appName="Text Editor"/>
        <Body/>
    </div>
  );
}

export default App;
