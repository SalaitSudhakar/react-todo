import React from "react";
import { LuListTodo } from "react-icons/lu";

const Header = () => {
  return (
    <header className="my-12 text-center">
      <h1 className="animate-slide-left text-shadow-sm text-shadow-slate-200 text-3xl sm:text-5xl flex justify-center items-center align-top gap-3">
        <LuListTodo className="size-10 sm:size-14 align-text-top text-slate-300 rounded-full bg-linear-to-br from-indigo-900 via-purple-900 to-violet-900 p-2" />
        <span>Todo Flow</span>
      </h1>
      <p className="animate-slide-up mt-3 text-slate-400">
        Organize your daily tasks
      </p>
    </header>
  );
};

export default Header;
