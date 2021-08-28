import React, { useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";

const Task = ({ task, handleCheckbox, handleDelete }) => {
  useEffect(() => {
    console.log(task);
  }, [task]);

  return (
    <div key={task.id} className="todo-row">
      <div>
        <Checkbox
          color="default"
          size="small"
          onChange={(e) => {
            handleCheckbox(task);
          }}
        />
        <span
          style={{
            fontSize: "18px",
            fontFamily: "'Jost',sans-serif",
            fontWeight: "500",
            fontStyle: "italic",
            textTransform: "uppercase",
            // textDecoration: "line-through",
            marginTop: "5px",
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          {task.val}
        </span>
      </div>
      <DeleteIcon
        style={{ marginTop: "8px" }}
        onClick={() => handleDelete(task.id)}
      />
    </div>
  );
};

export default Task;
