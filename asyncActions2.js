const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FEATCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FEATCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FEATCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware.thunk));