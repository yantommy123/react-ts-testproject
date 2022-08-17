import * as React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import { Routes } from 'react-router/lib/components';
import './style.css';
import { Home } from './components/Home';
import { About } from './components/About';

export default function App() {
  return (
    <div>
      {
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      
      }
    </div>
  );
}
