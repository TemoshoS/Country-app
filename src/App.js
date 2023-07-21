import './App.css';
import { useState } from 'react';

import CountryDetails from './Components/countryDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/home';


function App() {

    

  return (
    
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/country/:countryName' element={<CountryDetails />} />
        </Routes>

        </BrowserRouter>
      </div>
    
  );
}

export default App;
