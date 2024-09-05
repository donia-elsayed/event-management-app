import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState([]);
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events"));
    const event = storedEvents.find((event) => event.id === parseInt(id));
    setEvent(event);
  }, []);
  console.log(event);
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto leading-8">
      <h3 className="text-xl font-semibold mb-2 text-center">
        {event.eventName}
      </h3>
      <div className="flex justify-between my-5">
        <p>Date : {event.eventDate}</p>
        <p>Location : {event.eventLocation}</p>
      </div>
      <p>{event.eventDescription}</p>
      <button className="px-4 py-2 rounded-lg bg-teal-500 text-white font-medium mt-4 block m-auto">
        <Link to="/register">Register For Event</Link>
      </button>
    </div>
  );
};

export default EventDetails;
