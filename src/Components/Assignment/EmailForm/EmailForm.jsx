import { ErrorMessage, Form, Formik } from "formik";
import validation from "./emailFormValidate";

const EmailForm = () => {
  const handleFormSubmit = () => {
    alert("successfully");
  };

  return (
    <>
      <Formik
        initialValues={{
          emailEmailForm: "",
          titleEmailForm: "",
          messageEmailForm: "",
        }}
        onSubmit={handleFormSubmit}
        validationSchema={validation}
      >
        {({ values, handleSubmit, handleChange, handleBlur, resetForm }) => (
          <>
            <Form>
              <div>
                <label htmlFor="">To</label>
                <input
                  type="email"
                  className="classEmailEmailForm"
                  id="IDEmailEmailForm"
                  name="emailEmailForm"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="emailEmailForm"
                  component="small"
                  className="error"
                />
              </div>

              <div>
                <label htmlFor="">Title</label>
                <input
                  type="text"
                  className="classTitleEmailForm"
                  id="IDTitleEmailForm"
                  name="titleEmailForm"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="titleEmailForm"
                  component="small"
                  className="error"
                />
              </div>

              <div>
                <label htmlFor="">Message</label>
                <input
                  type="text"
                  className="classMessageEmailForm"
                  id="IDMessageEmailForm"
                  name="messageEmailForm"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="messageEmailForm"
                  component="small"
                  className="error"
                />
              </div>

              <div>
                <input type="file" multiple />
              </div>

              <div>
                <button type="submit" onSubmit={handleSubmit}>
                  Submit
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default EmailForm;
