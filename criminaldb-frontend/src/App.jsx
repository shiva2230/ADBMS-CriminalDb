import { useEffect, useState } from 'react'
import './App.css'
import ListAllCriminals from './components/ListAllCriminals'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CriminalComponent from './components/CriminalComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'

function App() {


  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
      <Routes>
        <Route path='/all' element ={<ListAllCriminals/>}></Route>
        <Route path='/add' element ={<CriminalComponent/>}></Route>
        <Route path='/edit/:id' element={<CriminalComponent/>}></Route>
      </Routes>
    <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
