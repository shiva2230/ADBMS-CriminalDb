import { useEffect, useState } from 'react'
import './App.css'
import ListAllCriminals from './components/ListAllCriminals'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CriminalComponent from './components/CriminalComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import SignUpComponent from './components/SignUpComponent'
import DashBoardComponent from './components/DashBoardComponent'
import SignInComponent from './components/SignInComponent'


function App() {


  return (
    <>
    <BrowserRouter>
    {/* <HeaderComponent/> */}

      <Routes>
        <Route path='/all' element ={<ListAllCriminals/>}></Route>
        <Route path='/add' element ={<CriminalComponent/>}></Route>
        <Route path='/edit/:id' element={<CriminalComponent/>}></Route>
        <Route path='/signin' element={<SignInComponent/>}></Route>
        <Route path='/' element= {<DashBoardComponent/>}></Route>
        <Route path='/signup' element={<SignUpComponent/>}></Route>
      </Routes>
    <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
