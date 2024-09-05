import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import EventList from "./components/EventList";
import EventForm from "./components/EventForm";
import EventDetails from "./components/EventDetails";
import RegisterForEvent from "./components/RegisterForEvent";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-teal-400 shadow-md text-white mx-auto p-3">
        <ul className="flex justify-evenly font-semibold text-lg">
          <li>
            <Link to="/">Events List</Link>
          </li>
          <li>
            <Link to="/create-event"> Create Event</Link>
          </li>
          <li>
            <Link to="/register"> Register For Event</Link>
          </li>
        </ul>
      </nav>
      <h1 className="text-2xl font-bold text-center my-2 text-teal-600">
        Event Management Platform
      </h1>

      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/create-event" element={<EventForm />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/register" element={<RegisterForEvent />} />
      </Routes>
    </div>
  );
}

export default App;
