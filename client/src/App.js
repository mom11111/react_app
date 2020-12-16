import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'
import Addprod from './components/Addprod'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path="/">
          <Home />
      </Route>

      <Route exact path="/addprod"><Addprod /></Route>

    </div>
    </BrowserRouter>
    
  );
}

export default App;
