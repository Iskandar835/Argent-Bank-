// REACT 
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// REDUX 
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./reducers";
import './assets/index.css';
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

// FILES 
import Home from './pages/Home.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import SignIn from './pages/Signin.jsx';
import User from './pages/User.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <Router>
     <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/user" element={<User />}/>
        <Route />
      </Routes>
     <Footer />
    </Router>
  </React.StrictMode>
  </Provider>,
);
