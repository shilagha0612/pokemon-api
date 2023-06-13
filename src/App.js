import logo from './logo.svg';
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ReactDom from 'react-dom/client';
import './App.css';
// import Api from './Components/Api';
// import Example from './Components/Example';
import Newapi from './Components/Newapi';

function App() {
  return (
    <div>
      {/* <Link to="/about" >Example</Link> */}
      {/* <Api/> */}
      {/* <Routes>
        <Route path="/about" element={<Example />} />
        
      </Routes> */}
      <Newapi/>
    </div>
  );
}

export default App;
