import ACTIONS from "./actionTypes";

const { ADD, EDIT, REMOVE, TOGGLE } = ACTIONS;

export function addTodo(title, category, priority) {
  return {
    type: ADD,
    payload: {
      title,
      category,
      priority,
    },
  };
}

export function editTodo(id, title, category, priority) {
  return {
    type: EDIT,
    payload: {
      id,
      title,
      category,
      priority,
    },
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE,
    payload: id,
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE,
    payload: id,
  };
}
