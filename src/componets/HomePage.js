import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

export const HomePage = () => {
  return (
    <div className="the-whole-homepage">
      <div className="home">
        <header className="home-header">
          <h1>THE TODO LIST APP</h1>
          <div className="home-header-text">
            <h2>The todo app for your Needs</h2>
            <p>
              Welcome to the todo list app. Note down your daily tasks and
              accomplish your daily goals in an orderly manner.
            </p>
          </div>
        </header>
        <section className="home-section">
          <h2>How to use the app</h2>
          <ul style={{ textAlign: "left", marginLeft: "10%" }}>
            <li className="list-items">
              Navigate to the to do app page by clicking the{" "}
              <strong>'Get Started'</strong> button
            </li>
            <li className="list-items">
              In the input field, type your tasks for the day
            </li>
            <li className="list-items">
              Keep truck of what is done and what is yet to do by checking the
              completed tasks
            </li>
            <li className="list-items">
              Look at the counter to know how many tasks are yet to be completed
            </li>
            <li className="list-items">
              Tasks can be deleted incase the user has a change of heart
            </li>
          </ul>
          <br />

          <Link to="/todolist" className="link">
            Get Started
          </Link>
        </section>
      </div>
    </div>
  );
};
