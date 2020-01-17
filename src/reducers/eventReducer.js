// eventReducer.js

import { ADD_EVENT, DELETE_EVENT } from '../actions/types';

export default function eventReducer(state = [], action) {
  switch (action.type) {
    case ADD_EVENT:
      return [...state, action.payload];
    case DELETE_EVENT:
      return state.filter(event => event.id !== action.payload.id);
    default:
      return state;
  }
}