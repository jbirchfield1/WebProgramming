import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PersonalInfo from './pages/PersonalInfo';
import Hobbies from './pages/Hobbies';


export default function App() {
  return (
    <Router>
    <div>
      <nav>
        <Link to="/" class="navLink">Personal Info</Link>
        <Link to="/hobbies" class="navLink">Hobbies</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </div>
    </Router>
  );
}
