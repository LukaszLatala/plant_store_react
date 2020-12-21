import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  userName: Yup.string().required("Podaj swój wiek"),

  userEmail: Yup.string()
    .required("Email jest wymagany")
    .email("Niepoprawny adres email"),
  userMessage: Yup.string().required("Imię jest wymagane!"),
});

const Contact2 = () => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        userName: "",
        userEmail: "",
        userMessage: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values }) => (
        <Form>
          <Field name="userName" type="text" placeholder="type your name" />
          <ErrorMessage name="userName" />
          <Field name="userEmail" type="text" placeholder="type your email" />
          <ErrorMessage name="userEmail" />

          <Field
            name="userMessage"
            type="text"
            component="textarea"
            placeholder="type your message"
          />
          <ErrorMessage name="userMessage" />

          <button type="submit">send</button>
        </Form>
      )}
    </Formik>
  );
};

export default Contact2;
