import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/App.css'
import App from './App';
import Header from './pages/Header';
import Footer from './pages/Footer';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "bootstrap-icons/font/bootstrap-icons.css";
import 'react-photo-view/dist/react-photo-view.css';
import { HashRouter } from 'react-router-dom';
import ScrollToTop from './misc/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <HashRouter>
    <React.StrictMode>
      <ScrollToTop/>
      <Header />
      <App />
      <Footer />
    </React.StrictMode>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
