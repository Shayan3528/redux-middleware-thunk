const { createStore, applyMiddleware } = require("redux");
const { fetchTodos } = require("./functions");
const {thunk} = require("redux-thunk");

console.log("Thunk Middleware:", thunk);
const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/added":
      return {
        ...state,
        todos: [...state.todos, { title: action.payload }],
      };
    case "todos/loaded":
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };

    default:
      return state;
  }
};

const store = createStore(todoReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchTodos);
