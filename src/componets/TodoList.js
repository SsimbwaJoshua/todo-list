import { useEffect, useState } from "react";
import React from "react";

export const TodoList = () => {
  const [message, setMessage] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  //logic for printing the the things to do

  const submitTodo = (event) => {
    event.preventDefault();

    message = {
      id: list.length++,
      text: { message },
    };

    const newList = [...list, message];
    setList(newList);
  };

  //logic for removing task
  const removeTask = () => {
    console.log("clicked");

    const newList = list.filter();
  };

  return (
    <div>
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
      {list.map((task, key) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "0 50px ",

              border: "2px solid #ccc",
              padding: "2px",
            }}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <input type="checkbox" />
              <h1>{task}</h1>
            </div>
            <button
              style={{ width: "30px", height: "30px" }}
              onClick={removeTask}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
};
