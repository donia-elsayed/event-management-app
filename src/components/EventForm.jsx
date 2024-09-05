import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const EventForm = () => {
  const intialEventValues = {
    eventName: "",
    eventDate: "",
    eventLocation: "",
    eventDescription: "",
  };
  const validationEventSchema = Yup.object({
    eventName: Yup.string().required("Event name is required"),
    eventDate: Yup.date().required("Event date is required"),
    eventLocation: Yup.string().required("Event location is required"),
    eventDescription: Yup.string().required("Event description is required"),
  });
  const handleSubmit = (values, { resetForm }) => {
    const events = JSON.parse(localStorage.getItem("events")) || [];
    const newEvent = { ...values, id: events.length + 1, registrations: [] };
    const updatedEvents = [...events, newEvent];
    console.log(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    console.log();
    alert(`${values.eventName} is created successfully`);
    resetForm();
  };
  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Create New Event</h2>
      <Formik
        initialValues={intialEventValues}
        onSubmit={handleSubmit}
        validationSchema={validationEventSchema}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <label
                htmlFor="eventName"
                className="text-sm font-medium text-gray-700"
              >
                Event Name
              </label>
              <Field
                tyoe="text"
                name="eventName"
                id="eventName"
                className={`mt-1 block w-full border rounded-md shadow-sm p-2 ${
                  errors.eventName && touched.eventName
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
              />
              <ErrorMessage
                name="eventName"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="eventDate"
                className="text-sm font-medium text-gray-700"
              >
                Event Date
              </label>
              <Field
                type="date"
                name="eventDate"
                id="eventDate"
                className={`mt-1 block w-full rounded-md border p-2 shadow-sm ${
                  errors.eventDate && touched.eventDate
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
              />
              <ErrorMessage
                name="eventDate"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="eventLocation"
                className="text-sm font-medium text-gray-700"
              >
                Event Location
              </label>
              <Field
                tyoe="text"
                name="eventLocation"
                id="eventLocation"
                className={`mt-1 block w-full rounded-md border p-2 shadow-sm ${
                  errors.eventLocation && touched.eventLocation
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
              />
              <ErrorMessage
                name="eventLocation"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="eventDescription"
                className="text-sm font-medium text-gray-700"
              >
                Event Description
              </label>
              <Field
                as="textarea"
                name="eventDescription"
                id="eventDescription"
                className={`mt-1 block w-full rounded-md border p-2 shadow-sm ${
                  errors.eventDescription && touched.eventDescription
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
              />
              <ErrorMessage
                name="eventDescription"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 p-2 rounded-lg text-white"
            >
              Create Event
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EventForm;
