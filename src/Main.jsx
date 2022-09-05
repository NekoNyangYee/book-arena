import React from 'react';
import { Routes, Route, Router, NavLink, BrowserRouter } from 'react-router-dom'

import Search from './Components/Search';
import About from './Components/About';
import Header from './Components/Header';
import Home from './Components/Home';

import './Main.css';



export default function Main() {

  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Search' element={<Search />} />
        <Route path='About' element={<About />} />
      </Routes>
    </>
  );
}