import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { TodoList } from "./componets/TodoList";
import { HomePage } from "./componets/HomePage";
import { HowItWorks } from "./componets/HowitWorks";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/HowItWorks" element={<HowItWorks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
