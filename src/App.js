import './App.css';
import { Music, Tour } from './pages';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './layout';

function App(){

  return(
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Music />} />
        <Route path='/tour' element={<Tour />} />
      </Routes>
    </>
  );
};



export default App;
