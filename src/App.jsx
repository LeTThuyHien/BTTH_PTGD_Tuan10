// src/App.jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Layout/Home/Home';
import Step1 from "./components/Step1/Step1"
import Step2 from './components/Step2/Step2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/step1' element={<Step1 />} />
        <Route path='/step2' element={<Step2 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
