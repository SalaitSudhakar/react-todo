import React from "react";
import { LuX } from "react-icons/lu";

const Modal = ({ title, onCloseModal, children }) => {
  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) onCloseModal(false);
  };
  return (
    <div
      onClick={handleCloseModal}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm "
    >
      <div className="pb-2 min-w-11/12 sm:min-w-7/12 md:min-w-6/12 lg:min-w-4/12 bg-slate-950  border border-slate-400 rounded-xl animate-pop-in">
        <div className="flex items-center justify-between px-4 sm:px-6  border-b  border-b-slate-600 py-6 shadow-[0px_1px_6px_rgba(139,92,246,0.3)] rounded-t-xl">
          <h6 className="text-xl sm:text-2xl">{title}</h6>
          <button
            onClick={() => onCloseModal(false)}
            className="font-medium text-slate-200 rounded-full p-1.5 bg-rose-600  hover:scale-90  cursor-pointer hover:shadow-md shadow-slate-200 translate-all ease-in-out duration-200"
          >
            <LuX className="size-5 sm:size-6" />
          </button>
        </div>


        <div className="pb-6 px-4 sm:px-6 ">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
