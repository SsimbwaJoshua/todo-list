import { useEffect, useState } from "react";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import "../App.css";

export const TodoList = () => {
  /////////////////////////////////////////////////////////////
  //code to be updated with use Effect
  // const style1 = {
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   margin: "0 50px ",

  //   // backgroundColor: "red",
  //   border: "2px solid #ccc",
  //   padding: "2px",
  // };

  // const style2 =
  //code to be updated with useEffect
  //////////////////////////////////////////////////////////////

  const [message, setMessage] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  //logic for printing the the things to do

  /////////////////////////////////////////
  const submitTodo = (event) => {
    event.preventDefault();

    //local storage
    // localStorage.setItem("message", JSON.stringify(list));
    // localStorage.getItem("message");

    // const datafrmlocalStorage = localStorage.getItem("message");

    //local storage

    const newList = [
      ...list,
      {
        id: uuidv4(),
        text: message,
        completed: false,
      },
    ];
    setList(newList);
    localStorage.setItem("message", JSON.stringify(newList));
  };

  //logic for removing task
  const removeTask = (id) => {
    console.log("clicked");

    const newList = list.filter((task) => {
      if (task.id != id) return task;
    });
    setList(newList);
    localStorage.setItem("message", JSON.stringify(newList));
  };

  // completed task
  const complete = (id) => {
    const isComplete = list.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
        return task;
      } else {
        return task;
      }
    });
    setList(isComplete);
    localStorage.setItem("message", JSON.stringify(isComplete));
  };

  /////////////////////////////////////////
  // implememnting local storage
  useEffect(() => {
    const datafrmlocalStorage = localStorage.getItem("message");
    setList(JSON.parse(datafrmlocalStorage));
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("message", JSON.stringify(list));
  // }, [list]);

  ///////////////////////////////////////////////////////

  return (
    <div style={{ marginTop: "30px" }}>
      <h1>THINGS TO DO</h1>
      <form onSubmit={submitTodo}>
        <input
          style={{ width: "60%", height: "30px" }}
          placeholder="Add New"
          type="text"
          value={message}
          onChange={handleChange}
        />
        <input style={{ height: "30px" }} type="submit" />
      </form>
      <br />
      {list.map((task, index) => {
        // return console.log(task);
        return (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "0 50px ",

              border: "2px solid #ccc",
              padding: "2px",

              backgroundColor: task.completed ? "green" : "white",
            }}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <input type="checkbox" onClick={() => complete(task.id)} />
              <h1>{task.text}</h1>
            </div>
            <button
              style={{ width: "30px", height: "30px" }}
              onClick={() => removeTask(task.id)}
            >
              X
            </button>
          </div>
        );
      })}
      <br />
      <br />

      <Link to="/" className="link">
        HomePage
      </Link>
    </div>
  );
};
