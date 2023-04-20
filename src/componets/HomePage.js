import React from "react";
import { Link } from "react-router-dom";

import "../App.css";
import { NavBar } from "./NavBar";

export const HomePage = () => {
  return (
    <div className="the-whole-homepage">
      <div className="home-home">
        <div className="howitWorks-navigation">
          <h1>THE TODO LIST APP</h1>
          <NavBar />
        </div>
        <div className="home">
          <div></div>
          <header className="home-header">
            <div className="home-header-text">
              <h2>The todo app for your Needs</h2>
              <p>
                Welcome to the todo list app. Note down your daily tasks and
                accomplish your daily goals in an orderly manner.
              </p>
              <br />
              <Link to="/todolist" className="link">
                Get Started
              </Link>
            </div>
            <div></div>
          </header>
        </div>
      </div>
    </div>
  );
};
