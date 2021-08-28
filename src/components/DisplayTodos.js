import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import "animate.css";

const DisplayTodos = ({ taskList, setTaskList, save }) => {
  const handleDelete = (id) => {
    var x = document.getElementById(id);
    console.log(x.classList);
    x.classList.remove("animate__zoomInLeft");
    x.classList.add("animate__rollOut");
    console.log(x.classList);
    const newTaskList = [...taskList].filter((task) => task.id !== id);
    setTaskList(newTaskList);
    save(newTaskList);
  };

  const handleCheckbox = (task) => {
    taskList.map((t) => {
      if (t.id === task.id) {
        t.completed = !t.completed;
      }
      return task;
    });
  };

  return taskList.map((task) => (
    <div
      key={task.id}
      id={task.id}
      className="todo-row animate__animated  animate__zoomInLeft"
    >
      <div>
        <Checkbox
          color="default"
          size="small"
          style={{ marginTop: "-4px" }}
          onChange={(e) => {
            handleCheckbox(task);
          }}
        />
        <span
          style={{
            fontSize: "18px",
            fontFamily: "'Jost',sans-serif",
            fontWeight: "600",
            fontStyle: "italic",
            textTransform: "uppercase",
            marginTop: "5px",
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          {task.val}
        </span>
      </div>
      <DeleteIcon
        className="delete-icon"
        onClick={() => handleDelete(task.id)}
      />
    </div>
  ));
};

export default DisplayTodos;
