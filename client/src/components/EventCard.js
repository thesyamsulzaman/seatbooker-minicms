import React from "react";
import { Link } from "react-router-dom";

import { LocationIcon } from "../lib/icons";

function EventCard({ id, name, schedule, address, bookedSeats, seats }) {
  return (
    <div className="bg-white p-3 w-full shadow-md hover:shadow-xl border border-gray-300 rounded">
      <span className="text-xs text-gray-600">
        {schedule.date} | {schedule.startsAt}
      </span>
      <p className="text-xl font-medium py-1">{name}</p>
      <div className="flex items-center">
        <LocationIcon classes="h-4 w-4 text-gray-400" />
        <span className="text-sm text-gray-500 ml-1">{address}</span>
      </div>

      <div className="flex items-center justify-between mt-3">
        <p className="text-sm text-gray-700 ml-1">
          {bookedSeats.length + 1 === seats ? (
            <React.Fragment>
              <span className="font-bold mr-1">{bookedSeats.length}</span>
              Seats are full
            </React.Fragment>
          ) : (
            <React.Fragment>
              <span className="font-bold mr-1">{bookedSeats.length}</span>
              Joined
            </React.Fragment>
          )}
        </p>

        <Link
          to={`/events/${id}`}
          className="py-2 px-4 bg-gray-700 shadow-md font-bold text-white text-sm rounded-full"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default EventCard;
