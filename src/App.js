import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Account from "./Components/Account";
import Home from "./Components/Home";
import ForgetPass from "./Components/ForgetPass";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forget" element={<ForgetPass />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
