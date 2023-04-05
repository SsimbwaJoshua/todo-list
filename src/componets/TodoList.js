import { useEffect, useState } from "react";
import { ReactDOM } from "react";

export const TodoList = () => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  //logic for printing the the things to do

  const toDoItem = () => {
    <div>
      {
        <p>
          {<input type="checkbox" />} {message}
        </p>
      }
    </div>;
  };

  const submitTodo = (event) => {
    event.preventDefault();
    const list = { message };
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
        <p>{list.message}</p>
      </form>
    </div>
  );
};
