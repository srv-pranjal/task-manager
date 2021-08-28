const DeleteTodo = ({ taskList, setTaskList, id }) => {
  const newTaskList = [...taskList].filter((task) => task.id !== id);
  setTaskList(newTaskList);
};

export default DeleteTodo;
