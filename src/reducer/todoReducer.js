import ACTIONS from "./actionTypes";

const { ADD, EDIT, REMOVE, TOGGLE } = ACTIONS;

export default function todoReducer(state, action) {
  const { todos, nextId } = state;
  const { type, payload = "" } = action;

  switch (type) {
    case ADD:
      return {
        todos: [
          ...todos,
          {
            id: nextId,
            title: payload.title,
            category: payload.category,
            priority: payload.priority,
            completedStatus: false,
          },
        ],
        nextId: nextId + 1,
      };

    case REMOVE:
      return {
        ...state,
        todos: todos.filter((todo) => todo.id !== payload),
      };

    case EDIT:
      return {
        ...state,
        todos: todos.map((todo) =>
          todo.id === payload.id
            ? {
                ...todo,
                title: payload.title,
                priority: payload.priority,
                category: payload.category,
              }
            : todo,
        ),
      };

    case TOGGLE:
      return {
        ...state,
        todos: todos.map((todo) =>
          todo.id === payload
            ? {
                ...todo,
                completedStatus: !todo.completedStatus,
              }
            : todo,
        ),
      };

    default:
      return state;
  }
}
