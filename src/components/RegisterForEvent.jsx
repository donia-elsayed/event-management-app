import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
const RegisterForEvent = () => {
  const navigate = useNavigate();
  const initialRegisterValues = {
    name: "",
    email: "",
  };
  const validationRegisterSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
  });
  const handleSubmit = (values, { resetForm }) => {
    alert(`${values.name} is register for event successfully`);
    resetForm();
    navigate("/");
  };
  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-center">
        Register for Event
      </h3>
      <Formik
        initialValues={initialRegisterValues}
        onSubmit={handleSubmit}
        validationSchema={validationRegisterSchema}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Field
                tyoe="text"
                name="name"
                id="name"
                className={`mt-1 block w-full border rounded-md shadow-sm p-2 ${
                  errors.name && touched.name
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className={`mt-1 block w-full rounded-md border p-2 shadow-sm ${
                  errors.email && touched.email
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 p-2 rounded-lg text-white"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForEvent;
