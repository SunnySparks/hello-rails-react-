import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';

/*
const initialState = { 
  things: [
    {
      name: 'test',
      guid: '123'
    }
  ]
};
*/

const initialState = { 
  greetings: []
};


function rootReducer(state, action) {
  switch (action.type) {
    case 'GET_GREETINGS_SUCCESS':
      return { greetings: action.json.greetings };
  }
  return state;
}

/*
function rootReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    default:
    return state
  }
}
*/

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
  return store;
}
