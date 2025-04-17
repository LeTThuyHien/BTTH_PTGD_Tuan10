// src/App.jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Layout/Home/Home';
import Step1 from "./components/Step1/Step1"
import Step2 from './components/Step2/Step2';
import Step3 from './components/Step3/Step3';
import CounterApp from './components/CounterApp/CounterApp';
import ToDoList from './components/ToDoList/ToDoList';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/step1' element={<Step1 />} />
        <Route path='/step2' element={<Step2 />} />
        <Route path='/step3' element={<Step3 />} />
        <Route path='/counterApp' element={<CounterApp />} />
        <Route path='/todolist' element={<ToDoList />} />
        <Route path='/themetoggle' element={<ThemeToggle />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
