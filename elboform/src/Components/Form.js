import React from "react";
import "./Form.css";
import { FaRegEnvelope } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegisterClint from "../Components/RegisterClint";
const initialState = {
  email: "",
  password: "",
};
const Form = () => {
  const [input, setInput] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState({});
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const signInHandler = (event) => {
    event.preventDefault();
    setErrorMessage(validateForm(input));
    input &&
      window.localStorage.setItem("user-info", JSON.stringify({ input }));
    //setInput(initialState);
  };
  const validateForm = (values) => {
    const errors = {};
    console.log(values);
    if (!values.email) {
      errors.email = "please enter valid email ID!";
    }
    if (!values.password) {
      errors.password = "please enter valid password!";
    }
    return errors;
  };
  //console.log(input);
  input && console.log(input);

  return (
    <div>
      <form className="form-entities">
        <div className="inputWithIcons">
          <span>
            <FaRegEnvelope />
          </span>

          <input
            type="text"
            name="email"
            placeholder={input.email}
            className="form-eliments"
            onChange={inputHandler}
          />
          <p className="errors">{errorMessage.email}</p>
        </div>
        <div className="inputWithIcons">
          <span>
            <AiFillLock />
          </span>

          <input
            type="text"
            name="password"
            placeholder={input.password}
            className="form-eliments"
            onChange={inputHandler}
          />
          <p className="errors">{errorMessage.password}</p>
          <label htmlFor="" className="label">
            Forgot?
          </label>
        </div>
        <div>
          <button className="form-eliments signIn" onClick={signInHandler}>
            Sign in
          </button>
        </div>
        <div className="register">
          <label className="not">Not registered?</label>
          <Router>
            <Link to="/register" className="start">
              Get started
            </Link>
            <Routes>
              <Route path="/register" element={<RegisterClint />} />
            </Routes>
          </Router>
        </div>
      </form>
    </div>
  );
};
export default Form;
