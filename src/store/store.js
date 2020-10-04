import thunkMiddleware from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import moviesReducer from './reducers/moviesReducer';
import mainReducer from './reducers/mainReducer';


const rootReducer = combineReducers({
  movies: moviesReducer,
  main: mainReducer,
});
const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
export default store;
