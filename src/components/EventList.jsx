import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarIcon, MapPinIcon } from "@heroicons/react/20/solid";

const EventList = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const allEvents = JSON.parse(localStorage.getItem("events"));
    setEvents(allEvents);
  }, []);
  return (
    <div className="mx-auto px-8 py-4">
      <h2 className="text-2xl font-bold mb-2 text-teal-600">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">{event.eventName}</h3>
            <div className="flex justify-between my-5">
              <div className="flex gap-2 justify-center items-center">
                <CalendarIcon className="h-6 w-6 text-teal-400" />
                <p>{event.eventDate}</p>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <MapPinIcon className="h-6 w-6 text-teal-400" />
                <p>{event.eventLocation}</p>
              </div>
            </div>
            <p>{event.eventDescription}</p>
            <button className="rounded-lg bg-teal-500 text-white px-4 py-2 mt-4">
              <Link to={`/event/${event.id}`}>View Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
