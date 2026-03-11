import React from "react";
import { LuListTodo } from "react-icons/lu";
import {
  calculateCompletedPercentage,
  totalTasksAndCompletedTasksLength,
} from "../utility/calculatePercentage";

const Header = ({ todos }) => {
  const [totalTasks, completedTasks] = totalTasksAndCompletedTasksLength(todos);

  console.log("CompletedTask in Header: ", completedTasks);

  const completedPercentage = calculateCompletedPercentage(
    totalTasks,
    completedTasks,
  );

  console.log("CompletedTask Percentage in Header: ", completedPercentage);

  return (
    <header className="my-12">
      <div>
        <h1 className="animate-slide-left text-shadow-sm text-shadow-slate-200 text-3xl sm:text-5xl flex justify-center items-center align-top gap-3">
          <LuListTodo className="size-10 sm:size-14 align-text-top text-slate-300 rounded-full bg-linear-to-br from-indigo-900 via-purple-900 to-violet-900 p-2" />
          <span>Todo Flow</span>
        </h1>
        <p className="animate-slide-up mt-3 text-slate-400 text-center">
          Organize your daily tasks
        </p>
      </div>

      <div className="animate-slide-right text-slate-500  gap-1.5 max-w-11/12 sm:max-w-9/12 lg:max-w-1/2 mx-auto">
        <p className="block mt-12 mb-3 text-sm">
          ({completedTasks || 0} / {totalTasks || 0}) Completed
        </p>
        <div className="relative w-full h-2 bg-slate-400 rounded-full">
          <div
            className={`h-[inherit] bg-linear-to-r bg-slate-950/90 rounded-full duration-300 transition-all ease-out`}
            style={{ width: `${completedPercentage}%` }}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
