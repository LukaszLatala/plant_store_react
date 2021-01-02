import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import emailjs from "emailjs-com";
import { alertContentAndTypes } from "../../utils/alertContentAndTypes";
import ShopContext from "../../context/context";
import "./Contact.css";
import { yourServiceId, yourTemplateId, yourUserId } from "../../idKey/idKey";
// import { Input } from "@material-ui/core";
// const [checkiFInputIsNotEmpty, setCheckiFInputIsNotEmpty] = useState(false);

const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .required("Podaj swój wiek")
    .min(3, "Imię jest zbyt krótkie"),

  userEmail: Yup.string()
    .required("Email jest wymagany")
    .email("Niepoprawny adres email"),
  userMessage: Yup.string().required("Napisz coś do nas!"),
});

// const handleInputEmpty = () => {
//   if (
//     validationSchema.userName ||
//     validationSchema.userEmail ||
//     validationSchema.userMessage !== ""
//       ?   setCheckiFInputIsNotEmpty(false)
//       :   setCheckiFInputIsNotEmpty(tr);
//   )
//   setCheckiFInputIsNotEmpty(false);
// };

const Contact = () => {
  const value = useContext(ShopContext);

  const { showAndHideAlert } = value;

  const handleSendEmailForm = (e) => {
    // if (
    //   validationSchema.userName ||
    //   validationSchema.userEmail ||
    //   validationSchema.userMessage !== ""
    //     ? setCheckiFInputIsNotEmpty(false)
    //     : setCheckiFInputIsNotEmpty(true)
    // )
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
        <Form className="container" onSubmit={handleSendEmailForm}>
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
  );
};

export default Contact;

// emial js ogarnac
// alerty
// hosting
