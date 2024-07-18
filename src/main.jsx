import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from './pages/home';
import Anime from './pages/anime';
import Search from './pages/search';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}/>
          <Route path="anime/:id" element={<Anime />}/>
          <Route path="search" element={<Search />}/>
        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
