import {
  FETCH_EVENTS,
  FETCH_EVENT,
  CREATE_EVENT,
  DELETE_EVENT,
  UPDATE_EVENT,
  ADD_BOOKED_SEAT,
} from "../constants/events";

import history from "../lib/history";
import { mapEventObject } from "../lib/eventObjectMapper";

const BASE_URL = "http://localhost:3001";

export const fetchEvents =
  (searchTerm = "") =>
  async (dispatch) => {
    const response = await fetch(`${BASE_URL}/events`);
    const events = await response.json();

    dispatch({
      type: FETCH_EVENTS,
      payload: events.filter((event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    });
  };

export const fetchEvent = (id) => async (dispatch) => {
  const response = await fetch(`${BASE_URL}/events/${id}`);
  const event = await response.json();

  dispatch({ type: FETCH_EVENT, payload: event });
};

export const addEvent = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().user;
  const mappedEvent = mapEventObject({ ...formValues, userId });

  const response = await fetch(`${BASE_URL}/events/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(mappedEvent),
  });

  const event = await response.json();

  dispatch({ type: CREATE_EVENT, payload: event });
  history.push("/dashboard");
};

export const editEvent = (id, formValues) => async (dispatch, getState) => {
  const { userId } = getState().user;

  const mappedEvent = mapEventObject({ ...formValues, userId });

  const response = await fetch(`${BASE_URL}/events/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(mappedEvent),
  });

  const event = await response.json();

  dispatch({ type: UPDATE_EVENT, payload: { id: event.id, event } });
  history.push("/dashboard");
};

export const deleteEvent = (id) => async (dispatch) => {
  await fetch(`${BASE_URL}/events/${id}`, {
    method: "DELETE",
  });

  dispatch({ type: DELETE_EVENT, payload: id });
  history.push("/dashboard");
};

export const addBookedSeat =
  (eventId, selectedSeat) => async (dispatch, getState) => {
    await dispatch(fetchEvent(eventId));
    const event = getState().events[0];

    const updatedEvent = { ...event };
    selectedSeat.isBooked = true;
    updatedEvent.bookedSeats.push(selectedSeat);

    const response = await fetch(`${BASE_URL}/events/${eventId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedEvent),
    });

    const newEvent = await response.json();

    dispatch({ type: ADD_BOOKED_SEAT, payload: newEvent });
    history.push(`/events/${eventId}`);
  };
