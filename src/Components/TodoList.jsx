import React from "react";
import { MdOutlineAssignmentLate } from "react-icons/md";
import { LuPen, LuTrash } from "react-icons/lu";

const TodoList = ({ handleCheck, handleEdit, handleDelete, state }) => {
  return (
    <div className="px-4 sm:px-6 p-6 lg:px-12 space-y-6 animate-panel-in">
      {state.todos && state.todos.length > 0 ? (
        state.todos.map((todo, index) => (
          <div
            key={todo.id}
            style={{ animationDelay: `${index * 0.2}s` }}
            className={`group animate-slide-up ${todo.completedStatus ? "todo-item-done" : "todo-item"} ${todo.completedStatus ? "border-slate-800" : todo.priority === "low" ? "border-green-500" : todo.priority === "medium" ? "border-yellow-600" : todo.priority === "high" ? "border-rose-600" : "border-slate-300"} p-3 sm:p-4 py-5 group border-l-4 hover:scale-[1.02] shadow-[0_8px_8px_-6px] shadow-slate-800/50 rounded-lg`}
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
              <div className="space-x-2">
                <button
                  disabled={todo.completedStatus}
                  onClick={() => handleEdit(todo.id)}
                  title="Edit"
                  className={` not-disabled:cursor-pointer opacity-0 ${todo.completedStatus ? "text-slate-800 bg-transparent " : "translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-out  shadow-md shadow-slate-700 hover:shadow-slate-600 text-indigo-300 hover:text-indigo-200 hover:scale-[1.1] "} transition-all duration-150 ease-in-out p-1.5 sm:p-2 lg:p-2.5 rounded-full `}
                >
                  <LuPen className="size-4" />
                </button>
                <button
                  disabled={todo.completedStatus}
                  onClick={() => handleDelete(todo.id)}
                  title="Delete"
                  className={` not-disabled:cursor-pointer opacity-0 ${todo.completedStatus ? "text-slate-800" : "-translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-out shadow-md shadow-slate-700 text-pink-500 group-hover:shadow-slate-600  hover:scale-[1.1]"} transition-all duration-150 ease-in-out p-1.5 sm:p-2 lg:p-2.5 rounded-full`}
                >
                  <LuTrash className="size-4 " />
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className=" min-h-52 text-center translate-y-15 text-slate-700 space-y-5 text-sm sm:text-base">
          <div className="flex flex-col items-center justify-center">
            <MdOutlineAssignmentLate className="size-10 sm:size-12 text-violet-500" />
          </div>

          <p className="text-md sm:text-lg font-semibold  mb-1.5">
            No tasks yet
          </p>
          <p className="text-sm text-slate-400">
            Hit the{" "}
            <span className="text-violet-600 font-semibold">+ Add Task</span>{" "}
            button to create your first task
          </p>
        </div>
      )}
    </div>
  );
};

export default TodoList;
