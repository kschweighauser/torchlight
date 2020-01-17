// actions >> index.js

import uuidv4 from 'uuid/v4';
import { ADD_EVENT, DELETE_EVENT } from './types';

export const createEvent = ({ locationName,
                              locationAddress,
                              eventInformation,
                              weatherChoice,
                              directionsChoice,
                              twitterChoice,
                              eventDateTime }) => ({
  type: ADD_EVENT,
  payload: {
    id: uuidv4(),
    locationName,
    locationAddress,
    eventInformation,
    weatherChoice,
    directionsChoice,
    twitterChoice,
    eventDateTime
  }
});

export const deleteEvent = id => ({
  type: DELETE_EVENT,
  payload: {
    id
  }
});