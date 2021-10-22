import { createStore } from 'redux';


const reduxDevTools =
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function reducer(initialState = 0, action) {
  switch (action.type) {
    case 'plus-one':
      return  initialState + 1
    case 'minus-one':
      return  initialState - 1
    case 'reset' :
      return initialState = 0
    default:
      return initialState
  }
}

const store = createStore(reducer, reduxDevTools);

export default store;
