import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Header from './components/header';
import HomeScreen from './screens/Homescreen';
import SearchScreen from './screens/Searchscreen';
import ProfileScreen from './screens/Profilescreen';
import { GeistProvider, CssBaseline } from '@geist-ui/core'


function App() {

  
  
  return (
    <div >
      <Router>
      <Header />
      
      <div>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/search' element={<SearchScreen />} exact />
            <Route path='/me' element={<ProfileScreen />} exact />
            {/* <Route path='/signup' element={<Signup />} exact/>
            <Route path='/login' element={<Login />} exact/> */}
  
          </Routes>
      </div>
      </Router>
      </div>
  );
}

export default () => {
  const [themeType, setThemeType] = useState('dark')
  const switchThemes = () => {
    setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
  }
  return (
  <GeistProvider themeType={themeType}>
    <CssBaseline /> 
    <App /> 
  </GeistProvider>
  )
}