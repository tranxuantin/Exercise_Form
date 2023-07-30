import "./App.css";
import ContactForm from "./Components/Assignment/ContactForm/ContactForm";
import CovidForm from "./Components/Assignment/CovidForm/CovidForm";
import EmailForm from "./Components/Assignment/EmailForm/EmailForm";
import Library from "./Components/Assignment/LibraryManage/Library";
// import SignAccount from "./Components/Exercise/SignAccount";
// import Validate from "./Components/Exercise/Validate";
// import ValidateForm from "./Components/Exercise/ValidateForm";
// import ValidateWithFormik from "./Components/Exercise/ValidateWithFormik";

function App() {
  return (
    <>
      {/* <div style={{ backgroundColor: "#87CEFA" }}>
        <h1>Exercise</h1>
        <div className="background1">
          <SignAccount />
        </div>
        <div className="background1 marginTop">
          <Validate />
        </div>
        <div className="background1 marginTop">
          <ValidateForm />
        </div>
        <div className="background1 marginTop">
          <ValidateWithFormik />
        </div>
      </div> */}

      <div style={{ backgroundColor: "#FFDEAD" }}>
        <h1>Assignment</h1>
        <div className="background2">
          <ContactForm />
        </div>
        <div className="background2 marginTop">
          <Library />
        </div>
        <div className="background2 marginTop">
          <EmailForm />
        </div>
        <div className="background2 marginTop">
          <CovidForm />
        </div>
      </div>
    </>
  );
}

export default App;
