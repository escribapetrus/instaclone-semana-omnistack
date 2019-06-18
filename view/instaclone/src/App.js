import React from 'react';
import './App.css';
import Header from "./components/header.js"
import { BrowserRouter } from "react-router-dom";
import Router from "./router"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
