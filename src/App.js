import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import HomeScreen from './screens/Home';
import SearchScreen from './screens/Search';
import ProfileScreen from './screens/Profile';
import LoginScreen from './screens/Login';
import SignUpScreen from './screens/Signup';
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
            <Route path='/signup' element={<SignUpScreen />} exact/>
            <Route path='/login' element={<LoginScreen />} exact/>
  
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