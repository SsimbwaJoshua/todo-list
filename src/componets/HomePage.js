import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

export const HomePage = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1 style={{ color: "orangered" }}>THE TODO LIST APP</h1>
        <p>
          Welcome to the todo list app. Note down your daily tasks and
          accomplish your daily goals in an orderly manner.
        </p>
      </header>
      <section className="home-section">
        <h2>How to use the app</h2>
        <ul style={{ textAlign: "left", marginLeft: "10%" }}>
          <li>navigate to the to do app page by clicking the todoz button</li>
          <li>In the input field, type your tasks for the day</li>
          <li>
            Keep truck of what is done and what is yet to do by checking the
            completed tasks
          </li>
          <li>
            Look at the counter to know how many tasks are yet to be completed
          </li>
          <li>Tasks can be deleted incase the user has a change of heart</li>
        </ul>
        <br />

        <p>
          Note: the todo app does not store data permanently and will be lost
          uporn refresh of the page
        </p>
      </section>
      <br />
      <br />

      <Link to="/todolist" className="link">
        Todoz
      </Link>
    </div>
  );
};
