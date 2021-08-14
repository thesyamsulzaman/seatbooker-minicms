import {
  FETCH_EVENTS,
  FETCH_EVENT,
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  ADD_BOOKED_SEAT,
} from "../constants/events";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return action.payload;

    case ADD_BOOKED_SEAT:
    case FETCH_EVENT:
      return [action.payload];

    case CREATE_EVENT:
      return [...state, action.payload];

    case UPDATE_EVENT:
      const { id, event: updatedEvent } = action.payload;
      return state.map((event) => (event.id === id ? updatedEvent : event));

    case DELETE_EVENT:
      return state.filter((event) => event.id !== action.payload.id);

    default:
      return state;
  }
};
