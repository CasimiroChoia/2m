import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Works from './pages/Works';
import Budge from './pages/Budge';
import Panel from './pages/MSGPanel';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route path='/2m' element={<App />} />
        <Route path='/2m/home' element={<Home />} />
        <Route path='/2m/services' element={<Services />} />
        <Route path='/2m/works' element={<Works />} />
        <Route path='/2m/contact' element={<Contact />} />
        <Route path='/2m/budge' element={<Budge />} />
        <Route path='/2m/panel' element={<Panel />} />
        <Route path='/2m/*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
