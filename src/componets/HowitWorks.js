import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";

import "../App.css";

export const HowItWorks = () => {
  return (
    <div className="the-whole-howitworks">
      <section className="howitWorks-section">
        <div className="howitWorks-navigation">
          <h1>THE TODO LIST APP</h1>
          <NavBar />
        </div>
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
            Keep truck of what is done and what is yet to do by checking the the
            checkbox on the left of each task
          </li>
          <li className="list-items">
            Look at the counter to know how many tasks are yet to be completed
          </li>

          <li className="list-items">
            Tasks can be deleted uporn completion and any other reason using the{" "}
            <strong>"X"</strong> button
          </li>
        </ul>
        <br />

        <Link to="/todolist" className="link">
          Get Started
        </Link>
      </section>
    </div>
  );
};
