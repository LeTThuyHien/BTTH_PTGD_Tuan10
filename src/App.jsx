// src/App.jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Layout/Home/Home';
import Step1 from "./components/Step1/Step1"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/step1' element={<Step1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
