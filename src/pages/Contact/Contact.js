import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import emailjs from "emailjs-com";
import { alertContentAndTypes } from "../../utils/alertContentAndTypes";
import ShopContext from "../../context/context";
import "./Contact.css";
import { yourServiceId, yourTemplateId, yourUserId } from "../../Keys/Keys";

const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .required("Podaj swój wiek")
    .min(3, "Imię jest zbyt krótkie"),

  userEmail: Yup.string()
    .required("Email jest wymagany")
    .email("Niepoprawny adres email"),
  userMessage: Yup.string().required("Napisz coś do nas!"),
});

const Contact = () => {
  const value = useContext(ShopContext);

  const { showAndHideAlert } = value;

  const handleSendEmailForm = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(yourServiceId, yourTemplateId, e.target, yourUserId)
      .then((result) => {
        console.log(result.text);
        showAndHideAlert(
          1000,
          alertContentAndTypes.content.emailSend,
          alertContentAndTypes.types.success
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1> Send us a message!</h1>

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
          <Form
            className="container_contact"
            onSubmit={
              validationSchema.userName &&
              validationSchema.userEmail &&
              validationSchema.userMessage !== ""
                ? handleSendEmailForm
                : null
            }
          >
            <div className="contact_input">
              <label>Imię</label>
              <Field
                name="userName"
                type="text"
                placeholder="Podaj swoje imię "
              />
              <label>Email</label>
              <Field
                name="userEmail"
                type="text"
                placeholder="Podaj swój adres email"
              />

              <label> Twoja wiadomość</label>
              <Field
                className="textarea"
                name="userMessage"
                type="text"
                component="textarea"
                placeholder="Napisz do nas wiadomość"
              />
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
    </>
  );
};

export default Contact;

// emial js ogarnac
// alerty
// hosting
