import { useState } from "react";

const SignAccount = () => {
  const [form, setForm] = useState({
    username1: "",
    email1: "",
    password1: "",
    confirmPassword1: "",
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    const isValid =
      form.username1 && form.email1 && form.password1 && form.confirmPassword1;

    alert(isValid ? "Sign in Success" : "Sign in fail");
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form>
        <div className="custom-input">
          <label>Username </label>
          <input
            name="username1"
            value={form.username1 || ""}
            onChange={handleChange}
          />
        </div>
        <div className="custom-input">
          <label>Email </label>
          <input
            name="email1"
            value={form.email1 || ""}
            onChange={handleChange}
          />
        </div>
        <div className="custom-input">
          <label>Password </label>
          <input
            type="password"
            name="password1"
            value={form.password1 || ""}
            onChange={handleChange}
          />
        </div>
        <div className="custom-input">
          <label>Confirm password </label>
          <input
            type="password"
            name="confirmPassword1"
            value={form.confirmPassword1 || ""}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignAccount;
