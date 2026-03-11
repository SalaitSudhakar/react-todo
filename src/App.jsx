import React, { useEffect, useReducer, useState } from "react";
import AddTaskModal from "./Components/AddTaskModal";
import useLocalStorage from "./hooks/useLocalStorage";
import todoReducer from "./reducer/todoReducer";
import { removeTodo, toggleTodo } from "./reducer/todoActions";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TodoContainer from "./Components/TodoContainer";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [editTodo, setEditTodo] = useState(null);

  const { getData, storeData } = useLocalStorage("todo");

  // Lazy initialization of initial sate
  const [state, dispatch] = useReducer(todoReducer, null, () => {
    const data = getData(); // This data required to set the initial state from local storage that survives page reload

    return {
      todos: data?.todos || [],
      nextId: data?.nextId || 1,
    };
  });

  console.log("State: ", state.todos)

  useEffect(() => {
    storeData(state);
  }, [state, storeData]);

  const handleCheck = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleEdit = (id) => {
    const todoToEdit = state.todos.find((todo) => todo.id === id);
    setEditTodo(todoToEdit);
    setOpenModal(true);
  };

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="pb-6 sm:pb-12">
      {/* header */}
      <Header 
        todos={state.todos}
      />

      {/* Todo Container */}
      <TodoContainer
        handleCheck={handleCheck}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        setEditTodo={setEditTodo}
        setOpenModal={setOpenModal}
        state={state}
      />

      {/* Footer */}
      <Footer />

      {/* Modal */}
      {openModal && (
        <AddTaskModal
          title={"Add Task"}
          onCloseModal={setOpenModal}
          onAddTask={dispatch}
          editingTodo={editTodo}
        />
      )}
    </div>
  );
};

export default App;
