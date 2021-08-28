import React, { useState, useEffect, useRef } from "react";
import { Button, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import WarningBar from "./WarningBar";
import DisplayTodos from "./DisplayTodos";

function AddTodos() {
  const LOCAL_STORAGE_LIST_KEY = "task.lists";
  let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
  const [input, setInput] = useState("");
  const [taskList, setTaskList] = useState(lists);
  const [snackIsOpen, setSnackIsOpen] = useState(false);

  const handleTodos = (task) => {
    const newtasks = [
      ...taskList,
      {
        id: Math.floor(Math.random() * Date.now()),
        val: task,
        completed: false,
      },
    ];
    setTaskList(newtasks);
    save(newtasks);
    setInput("");
  };

  const currentRef = useRef(null);
  const save = (tasks) => {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(tasks));
  };

  useEffect(() => {
    console.log(taskList);
    currentRef.current.focus();
  }, [taskList]);

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <TextField
          label="Add a To-do Task!"
          variant="outlined"
          value={input}
          style={{ width: "250px" }}
          onChange={(event) => setInput(event.target.value)}
          inputRef={currentRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              input ? handleTodos(input) : setSnackIsOpen(true);
            }
          }}
          size="medium"
        />
        <WarningBar snackIsOpen={snackIsOpen} setSnackIsOpen={setSnackIsOpen} />
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          size="large"
          color="primary"
          onClick={() => {
            input ? handleTodos(input) : setSnackIsOpen(true);
          }}
          className="todo-button"
          style={{ margin: "5px 10px" }}
        >
          Add
        </Button>
      </div>
      <DisplayTodos taskList={taskList} setTaskList={setTaskList} save={save}/>
    </div>
  );
}

export default AddTodos;
