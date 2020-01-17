// index.js

import { combineReducers } from 'redux';
import events from './eventReducer';

export default combineReducers({
    events: events
});