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
    console.log("submit is now true");
    (message) => {};
    console.log(list);
  };

  return (
    <div>
      <h1>THINGS TO DO</h1>
      <form onSubmit={submitTodo}>
        <input
          placeholder="Add New"
          type="text"
          value={message}
          onChange={handleChange}
        />
        <input type="submit" />
        <br />
      </form>

      <ul>{list}</ul>
    </div>
  );
};
