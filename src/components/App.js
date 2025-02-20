import React from 'react';
import './App.css';
import Title from './Title/Title';
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Title />
        <Outlet /> {/* This will render POPOSList or About bases on the route */}
        <Footer />
    </div>
  )
};

export default App;
