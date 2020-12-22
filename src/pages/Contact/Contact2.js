import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";

// https://www.youtube.com/watch?v=3sXYK60T6Us

const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .required("Podaj swój wiek")
    .min(3, "Imię jest zbyt krótkie"),

  userEmail: Yup.string()
    .required("Email jest wymagany")
    .email("Niepoprawny adres email"),
  userMessage: Yup.string().required("Napisz coś do nas!"),
  // acceptedTerms: Yup.boolean()
  //   .required("Akceptacja warunków wymagana")
  //   .oneOf([true], "Musisz zaakceptować warunki"),
  // specialPower: Yup.string().oneOf[
  //   ["Super", "Bardzo fajna", "Średnio", "Słaba"].required("Wymagane")
  // ],
});

const Contact2 = () => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        userName: "",
        userEmail: "",
        userMessage: "",
        // acceptedTerms: false,
        // specialPower: "",
      }}
      onSubmit={(values) => {
        // console.log(values);
        alert(JSON.stringify(values));
      }}
    >
      {({ values }) => (
        <Form className="container">
          <div className="contact_input">
            <label>
              {" "}
              Imię
              <Field
                name="userName"
                type="text"
                placeholder="Podaj swoje imię "
              />
            </label>
            <label>
              Email
              <Field
                name="userEmail"
                type="text"
                placeholder="Podaj swój adres email"
              />
            </label>

            <label>
              {" "}
              Twoja wiadomość
              <Field
                className="textarea"
                name="userMessage"
                type="text"
                component="textarea"
                placeholder="Napisz do nas wiadomość"
              />
            </label>
            <Button
              className="contact_btn"
              type="submit"
              variant="contained"
              color="inherit"
            >
              Wyślij
            </Button>
          </div>
          <div className="has-error">
            <ErrorMessage name="userName" /> <br />
            <ErrorMessage name="userEmail" />
            <br />
            <ErrorMessage name="userMessage" />
            <br />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Contact2;
