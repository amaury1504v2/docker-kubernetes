import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";

import Navbar from "./components/navbar";

import Music from "./components/music";
import MusicCreate from "./components/music-create";

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <br />
        <Route path="/" exact component={Music}/>
        <Route path="/createMusic" component={MusicCreate} />
      </div>
    </Router>
  );
}

export default App;
