import * as React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
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
