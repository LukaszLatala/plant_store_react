import React from "react";
import "./Contact.css";
// import Example from "../../components/input/contact_Input";
import { useFormik } from "formik";
import * as Yup from "yup";
// const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName.length) {
//     errors.firstName = "Imię jest wymagane!";
//   } else if (values.firstName.length <= 3) {
//     errors.firstName = "Za krótkie umię, podaj minimum 4 znaki";
//   } else if (values.firstName.length > 10) {
//     errors.firstName = "Twoje imię jest zbyt długie";
//   }

//   if (!values.email.length) {
//     errors.email = "Email jest wymagany";
//   } else if (!values.email.match(EMAIL_REGEX)) {
//     errors.email = "Niepoprawny adres email";
//   }
//   return errors;
// };

const validationSchema = () =>
  Yup.object().shape({
    age: Yup.number()
      .required("Podaj swój wiek")
      .min(18, "Musisz być pełnoletni"),

    email: Yup.string()
      .required("Email jest wymagany")
      .email("Niepoprawny adres email"),
    firstName: Yup.string()
      .required("Imię jest wymagane!")
      .min(4, "Za krótkie umię, podaj minimum 4 znaki")
      .max(10, "Twoje imię jest zbyt długie"),
    lastName: Yup.string()
      .required("Nazwisko jest wymagane!")
      .min(3, "Za krótkie nazwisko, podaj minimum 4 znaki")
      .max(10, "Twoje nazwisko jest zbyt długie"),
  });

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      age: "",
    },
    validationSchema,
    // validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  const errorsElements = Object.entries(formik.errors).map(([key, value]) => (
    <p key={key}>{value}</p>
  ));

  return (
    <div className="container">
      <div className="contact">
        <form onSubmit={formik.handleSubmit}>
          <label>
            Imię:
            <input
              className={formik.errors.firstName ? "has-error" : "false"}
              name="firstName"
              onChange={formik.handleChange}
              type="text"
              value={formik.values.firstName}
            />
          </label>

          <label>
            Nazwisko:
            <input
              className={formik.errors.lastName ? "has-error" : "false"}
              name="lastName"
              onChange={formik.handleChange}
              type="text"
              value={formik.values.lastName}
            />
          </label>

          <label>
            Email:
            <input
              className={formik.errors.email ? "has-error" : "false"}
              name="email"
              onChange={formik.handleChange}
              required
              value={formik.values.email}
              type="email"
            ></input>
          </label>

          <label>
            Wiek:
            <input
              className={formik.errors.age ? "has-error" : "false"}
              name="age"
              onChange={formik.handleChange}
              required
              value={formik.values.age}
              type="number"
            ></input>
          </label>

          <button className="contact_btn" type="submit">
            {" "}
            Wyślij{" "}
          </button>
        </form>

        {errorsElements}
      </div>
    </div>
  );
};

export default Contact;
