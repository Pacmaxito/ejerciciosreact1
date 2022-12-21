import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nombre from './nombres/Nombre';
import Header from './header/Header';
import Titulo from './titulo/Titulo';

function App() {
  return (

   <BrowserRouter>

    <Header/>
    
    
    <Routes>
      <Route path='/'  element = {<Titulo/>}/>
      <Route path='/nombre' element = {<Nombre/>}/>
    </Routes>
    
   

   </BrowserRouter>
  );
}

export default App;
