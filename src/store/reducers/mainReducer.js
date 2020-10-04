import {ac} from '../actions/actionTypes';

const initialState = {
  drawerOpen: false,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ac.TOGGLE_DRAWER:
      return {...state, drawerOpen: !state.drawerOpen};
    default:
      return state;
  }
};
export default mainReducer;
