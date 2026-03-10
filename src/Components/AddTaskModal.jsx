import React, { Fragment, useState } from "react";
import Modal from "./Modal";
import { CATEGORIES, PRIORITIES } from "../utility/categoriesAndPriority";
import { addTodo } from "../reducer/todoActions";

const AddTaskModal = ({ onCloseModal, title, onAddTask }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    priority: "low",
  });

  const handleTaskName = (e) => {
    setFormData((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  const handleCategory = (e) => {
    setFormData((prev) => ({
      ...prev,
      category: e.target.value,
    }));
  };

  const handlePriority = (e) => {
    setFormData((prev) => ({
      ...prev,
      priority: e.target.value,
    }));
  };

  // Find the category selected in Categories.js file
  const selectedCategory = CATEGORIES.find(
    (cat) => cat.label.toLowerCase() === formData.category,
  );

  // Handle close modal
  const handleCloseModal = (e) => {
    e.preventDefault();
    onCloseModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch for reducer to add Todo (received from parent through props)
    onAddTask(
      addTodo(
        formData.name,
        formData.category,
        formData.priority,
      ),
    );

    // reset form
    setFormData({
      name: "",
      category: "",
      priority: "low",
    });

    // close Modal
    onCloseModal(false)
  };

  return (
    <Modal onCloseModal={onCloseModal} title={title}>
      <div className="mt-8">
        <form className="text-sm sm:text-base" onSubmit={handleSubmit}>
          <div className="mb-6 sm:mb-8 ">
            <label
              htmlFor="task"
              className="block mb-2 font-mono text-gray-500 tracking-wide"
            >
              Task
            </label>
            <input
              type="text"
              id="task"
              name="task"
              value={formData.name}
              onChange={handleTaskName}
              placeholder="Enter Your Task"
              required
              className="w-full bg-slate-800 border border-slate-600 text-slate-200 focus:border-violet-300 focus:ring-violet-800 outline-0 px-3 py-1.5 rounded-md"
            />
          </div>

          {/* Category */}
          <div className="mb-6 sm:mb-8">
            <label
              htmlFor="category"
              className="block mb-2 font-mono text-gray-500 tracking-wide"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleCategory}
              required
              className={` border  outline-0 focus:border-violet-300 focus:ring-1 focus:ring-violet-800 text-slate-500 w-full px-3 py-1.5 rounded-md
                ${
                  selectedCategory
                    ? selectedCategory.style
                    : "bg-slate-950 border-slate-600"
                }
                `}
            >
              <option value="" disabled>
                Select a category
              </option>
              {CATEGORIES.map((category) => (
                <option
                  key={category.label}
                  value={category.label.toLowerCase()}
                >
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          {/* priority */}
          <div className="mb-6 sm:mb-8">
            <p
              htmlFor="priority"
              className="mb-2 font-mono text-gray-500 tracking-wide "
            >
              Priority
            </p>
            <div className="flex gap-5  mt-4">
              {PRIORITIES.map((priority) => (
                <div key={priority.label}>
                  <input
                    type="radio"
                    name=""
                    id={priority.value}
                    value={priority.value}
                    onChange={handlePriority}
                    required
                    checked={priority.value === formData.priority}
                    className="sr-only"
                  />
                  <label
                    htmlFor={priority.value}
                    className={`${formData.priority === priority.value ? priority.checkedStyle : priority.uncheckedStyle} px-4 cursor-pointer border py-2 rounded-md w-1/3 transition-colors duration-200`}
                  >
                    {priority.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 sm:gap-6 mt-12">
            <button
              type="button"
              onClick={handleCloseModal}
              className="btn text-slate-600 border border-slate-900 hover:text-slate-400 hover:border-slate-700"
            >
              close
            </button>
            <button
              type="submit"
              className="btn bg-linear-to-r from-violet-600 to-purple-700 text-white "
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddTaskModal;
