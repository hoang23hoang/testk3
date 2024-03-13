import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './Components/Auth/Login.js';
import Register from "./Components/Auth/Register.js";
import HomePage from "./Components/Home/HomePage.js";
import Menu from "./Components/Home/Menu.js";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = 'auth/login' element={<Login />}/>
      <Route path = 'auth/register' element={<Register />}/>
      <Route path = '/' element={ <>
        <Menu/>
        <HomePage/>
      </>}
      />
    </Routes>
    
  </BrowserRouter>
  );
}

export default App;
