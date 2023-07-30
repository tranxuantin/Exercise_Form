import { Formik } from "formik";
import validation from "./validate";

const ContactForm = () => {
  const handleSubmitForm = () => {
    alert("login success");
  };

  return (
    <>
      <Formik
        initialValues={{
          usernameContactForm: "",
          emailContactForm: "",
          phoneContactForm: "",
          messageContactForm: "",
        }}
        validationSchema={validation}
        onSubmit={handleSubmitForm}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          setValues,
        }) => (
          <>
            <div>
              <label htmlFor="">Username</label>
              <input
                type="text"
                className="classUsernameContactForm"
                id="IDUsernameContactForm"
                name="usernameContactForm"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.usernameContactForm && (
                <p>{errors.usernameContactForm}</p>
              )}
            </div>

            <div>
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="classEmailContactForm"
                id="IDEmailContactForm"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.emailContactForm && <p>{errors.emailContactForm}</p>}
            </div>

            <div>
              <label htmlFor="">Phone</label>
              <input
                type="number"
                className="classPhoneContactForm"
                id="IDPhoneContactForm"
                name="phoneContactForm"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phoneContactForm && <p>{errors.phoneContactForm}</p>}
            </div>

            <div>
              <label htmlFor="">Message</label>
              <input
                type="text"
                className="classMessageContactForm"
                id="IDMessageContactForm"
                name="messageContactForm"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div>
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
