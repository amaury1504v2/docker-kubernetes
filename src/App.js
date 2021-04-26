import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useRef, useState } from "react";

import Navbar from "./components/navbar";
import ExercisesList from "./components/exercises-list";
import EditExercise from "./components/edit-exercise";
import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/create-user";

import Music from "./components/music";
import MusicCreate from "./components/music-create";

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
        <Route path="/music" component={Music} />
        <Route path="/createMusic" component={MusicCreate} />
      </div>
    </Router>
  );
}

export default App;
