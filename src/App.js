import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './components/home';

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
