import React from "react";
import './App.css'
import UserForm from "./component/UserForm";
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ViewData from "./component/ViewData";
import Search from "./component/Search";

function App() {
  return (
    <div className="App">
        
        <Router>
          <Routes>
            <Route path="/" element={<UserForm/>} />
            <Route path="/view" element={<ViewData/>} />
            <Route path="/search" element={<Search/>} />
          </Routes>
        </Router>
    </div>
  );  
}

export default App;
