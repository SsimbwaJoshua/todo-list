import { useEffect, useState } from "react";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import "../App.css";

export const TodoList = () => {
  const [message, setMessage] = useState("");
  const [list, setList] = useState([]);

  const [counter, setCounter] = useState(0);
  const [completedTasksNum, setCompletedTaskNum] = useState(0);
  const [pending, setPending] = useState(0);

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

    //counter
    setCounter(newList.length);

    //Pending tasks
    const pendingTask = newList.filter((task) => {
      if (!task.completed) {
        return task;
      }
    });
    setPending(pendingTask.length);
  };

  //logic for removing task
  const removeTask = (id) => {
    const newList = list.filter((task) => {
      if (task.id != id) return task;
    });
    setList(newList);
    localStorage.setItem("message", JSON.stringify(newList));

    // counter
    setCounter(newList.length);

    //checking for completed
    const numCompleted = newList.filter((task) => {
      if (task.completed) {
        return task;
      }
    });
    setCompletedTaskNum(numCompleted.length);

    //Pending tasks
    const pendingTask = newList.filter((task) => {
      if (!task.completed) {
        return task;
      }
    });
    setPending(pendingTask.length);
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

    //checking for completed
    const numCompleted = isComplete.filter((task) => {
      if (task.completed) {
        return task;
      }
    });
    setCompletedTaskNum(numCompleted.length);

    //Pending tasks
    const pendingTask = isComplete.filter((task) => {
      if (!task.completed) {
        return task;
      }
    });
    setPending(pendingTask.length);
  };

  /////////////////////////////////////////
  // implememnting local storage
  useEffect(() => {
    const datafrmlocalStorage = localStorage.getItem("message");

    // if local storage is null(empty), then update local storage with an empyty array and stop executing the code below
    if (datafrmlocalStorage == null) {
      localStorage.setItem("message", JSON.stringify([]));
      return;
    }

    const returnedData = JSON.parse(datafrmlocalStorage);
    setList(returnedData);

    setCounter(returnedData.length);

    //checking for completed
    const numCompleted = returnedData.filter((task) => {
      if (task.completed) {
        return task;
      }
    });
    setCompletedTaskNum(numCompleted.length);

    //Pending tasks
    const pendingTask = returnedData.filter((task) => {
      if (!task.completed) {
        return task;
      }
    });
    setPending(pendingTask.length);
  }, []);

  ////////////////////////////////////////////////////////
  //clearing all completed tasks
  // const clearAllCompleted = () => {
  //   const all = list.filter((task) => {
  //     if (!task.completed) return task;
  //   });
  //   localStorage.setItem("message", JSON.stringify(all));

  //   const datafrmlocalStorage = localStorage.getItem("message");

  //   const returnedData = JSON.parse(datafrmlocalStorage);
  //   setList(returnedData);
  // };

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
              {task.completed ? (
                <input
                  type="checkbox"
                  onClick={() => complete(task.id)}
                  checked
                />
              ) : (
                <input type="checkbox" onClick={() => complete(task.id)} />
              )}
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

      <section>
        <h1>{counter} : Total tasks</h1>
        <div style={{}}>
          <h1>{completedTasksNum} :completed Tasks</h1>

          {/* <button onClick={clearAllCompleted}>clear completed</button> */}
        </div>

        <h1>{pending} : Pending</h1>
      </section>
      <br />
      <br />

      <Link to="/" className="link">
        HomePage
      </Link>
    </div>
  );
};
