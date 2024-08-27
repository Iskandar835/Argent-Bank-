import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/index.css';
import Home from './pages/Home.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
     <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route />
        <Route />
      </Routes>
     <Footer />
    </Router>
  </React.StrictMode>,
);
