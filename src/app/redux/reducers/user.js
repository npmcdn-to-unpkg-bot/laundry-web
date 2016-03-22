// import { post } from 'jquery';

export const UPDATE_USER = 'UPDATE_USER';
export const ADD_ADDRESS = 'ADD_ADDRESS';

export const updateUserAction = (user) => ({
  type: UPDATE_USER,
  payload: user,
});

export const addUserAddressAction = (address) => ({
  type: ADD_ADDRESS,
  payload: address,
});

export const updateUserReducer = (state, action) => action.payload;

export const addUserAddressReducer = (state, action) => {
  console.log(state);
  console.log(action);
  return action.payload;
};

export const addUserAddress = (values) => (dispatch) => {
  // TODO: Add post call to middleware
  // dispatch(addUserAddress(values));
  console.log(values);
  console.log(dispatch);
};

export const actions = {
  updateUserAction,
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_USER]: updateUserReducer,
  [ADD_ADDRESS]: addUserAddressReducer,
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {};
export default function userReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
