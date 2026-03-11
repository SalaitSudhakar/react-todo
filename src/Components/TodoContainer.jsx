import React from "react";
import { CiCircleList } from "react-icons/ci";
import { LuPlus } from "react-icons/lu";
import TodoList from "./TodoList";

const TodoContainer = ({
  handleCheck,
  handleEdit,
  handleDelete,
  setEditTodo,
  setOpenModal,
  state,
}) => {
  return (
    <div className="w-full animate-slide-down">
      <div className="bg-slate-950 rounded-xl  border border-purple-700 max-w-11/12 sm:max-w-9/12 lg:max-w-1/2 mx-auto pb-6">
        <div className="flex justify-between items-center border-b border-b-slate-500 shadow-[0px_2px_6px_rgba(139,92,246,0.3)] px-4 py-6 rounded-t-xl">
          <div className="flex items-center gap-2 justify-center">
            <CiCircleList className="size-5 sm:size-6" />
            <h4 className="heading-violet-200 font-bold text-xl sm:text-2xl">
              Todos
            </h4>
          </div>
          <button
            className="btn bg-linear-to-r from-violet-600 to-purple-700 group text-white border border-purple-600 flex justify-center items-center gap-1.5"
            onClick={() => {
              setEditTodo(null);
              setOpenModal(true);
            }}
          >
            <LuPlus className="size-3 sm:size-4 group-hover:rotate-90 transition-all duration-200 ease-in" />
            Add Task
          </button>
        </div>

        {/* Todo List */}
        <TodoList
          handleCheck={handleCheck}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          state={state}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
