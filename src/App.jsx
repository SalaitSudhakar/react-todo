import React, { useEffect, useReducer, useState } from "react";
import AddTaskModal from "./Components/AddTaskModal";
import useLocalStorage from "./hooks/useLocalStorage";
import todoReducer from "./reducer/todoReducer";
import { LuCircleDashed, LuPen, LuTrash } from "react-icons/lu";
import { removeTodo, toggleTodo } from "./reducer/todoActions";
import { MdOutlineAssignmentLate } from "react-icons/md";

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
    <div className="">
      <h1 className="text-shadow-sm text-shadow-slate-200 text-5xl text-center mb-12 mt-6">
        Todo Flow
      </h1>

      <div className="w-full">
        <div className="bg-slate-950 rounded-xl  border border-purple-700 max-w-11/12 sm:max-w-9/12 lg:max-w-1/2 mx-auto pb-6">
          <div className="flex justify-between items-center border-b border-b-slate-500 shadow-[0px_2px_6px_rgba(139,92,246,0.3)] px-4 py-6 rounded-t-xl">
            <h4 className="heading-violet-200 font-bold text-2xl">Todos</h4>
            <button
              className="btn bg-linear-to-r from-violet-600 to-purple-700 text-white border border-purple-600"
              onClick={() => {
                setEditTodo(null);
                setOpenModal(true);
              }}
            >
              New Task
            </button>
          </div>

          {/* Todo List */}
          <div className="px-4 sm:px-6 p-6 lg:px-12 space-y-6">
            {state.todos && state.todos.length > 0 ? (
              state.todos.map((todo, index) => (
                <div
                  key={todo.id}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  className={`animate-slide-up ${todo.completedStatus ? "todo-item-done" : "todo-item"} ${todo.completedStatus ? "border-slate-800" : todo.priority === "low" ? "border-green-500" : todo.priority === "medium" ? "border-yellow-600" : todo.priority === "high" ? "border-rose-600" : "border-slate-300"} p-3 sm:p-4 py-5 group border-l-4 hover:scale-[1.02] shadow-[0_8px_8px_-6px] shadow-slate-800/50 rounded-lg`}
                >
                  <div className="flex gap-2">
                    <div
                      className={`text-[8px] sm:text-[10px] p-1 rounded-lg ${todo.completedStatus ? "text-slate-800 bg-slate-950/20 border border-slate-800" : "bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30"}  `}
                    >
                      {todo.category}
                    </div>
                    <div
                      className={`text-[8px] sm:text-[10px] p-1 rounded-md  ${todo.completedStatus ? "text-slate-800 bg-slate-950/20 border border-slate-800" : todo.priority === "low" ? "badge-low" : todo.priority === "medium" ? "badge-medium" : "badge-high"}`}
                    >
                      {todo.priority}
                    </div>
                  </div>

                  {/* Bottom content */}
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex gap-2 items-center justify-between">
                      <input
                        type="checkbox"
                        name="completed"
                        checked={todo.completedStatus}
                        className="checkbox"
                        onChange={() => handleCheck(todo.id)}
                      />
                      <p
                        className={`${todo.completedStatus ? "line-through text-slate-500" : "text-slate-100"} text-sm sm:text-base font-medium`}
                      >
                        {todo.title}
                      </p>
                    </div>

                    {/* right side action buttons */}
                    <div className="space-x-4 ">
                      <button
                        disabled={todo.completedStatus}
                        onClick={() => handleEdit(todo.id)}
                        className={`not-disabled:cursor-pointer ${todo.completedStatus ? "text-slate-800 bg-transparent" : "shadow-md shadow-slate-700 hover:shadow-slate-600 text-indigo-300 hover:text-indigo-200 hover:scale-[1.1] "} transition-all duration-150 ease-in-out p-1.5 sm:p-2 lg:p-2.5 rounded-full `}
                      >
                        <LuPen className="size-4" />
                      </button>
                      <button
                        disabled={todo.completedStatus}
                        onClick={() => handleDelete(todo.id)}
                        className={`not-disabled:cursor-pointer ${todo.completedStatus ? "text-slate-800" : "shadow-md shadow-slate-700 text-pink-500 group-hover:shadow-slate-600  hover:scale-[1.1]"} transition-all duration-150 ease-in-out p-1.5 sm:p-2 lg:p-2.5 rounded-full`}
                      >
                        <LuTrash className="size-4 " />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className=" min-h-52 text-center translate-y-15 text-slate-700 space-y-4">
                <div className="flex flex-col items-center justify-center">
                  <MdOutlineAssignmentLate className="size-12 text-violet-500" />
                </div>

                <p className="text-lg font-semibold  mb-1.5">
                  No tasks yet
                </p>
                <p className="text-sm text-slate-400">
                  Hit the{" "}
                  <span className="text-violet-600 font-semibold">
                    + Add Task
                  </span>{" "}
                  button to create your first task
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="text-center text-xs text-slate-300 mt-6 font-medium">
        Built with ❤️ using React
      </p>

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
