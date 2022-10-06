import React from "react";
import "./Form.css";
import { FaRegEnvelope } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import axios from "axios";

const initialState = {
  emailAddress: "",
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
  async function getToken() {
    const r = await axios.post(
      "http://wm-test.elboapps.com/clients/token",
      input
    );
    return r;
  }
  const validateForm = (values) => {
    const errors = {};
    //console.log(values.emailAddress);
    if (!values.emailAddress) {
      errors.emailAddress = "please enter valid email ID!";
    }
    if (!values.password) {
      errors.password = "please enter valid password!";
    }

    const response = getToken();
    console.log(response);
    response
      .then((r) => console.log(r.response.data.Password))
      .catch((error) => console.log(error.response.data.Password));
    //console.log(getToken().data);
    //console.log(getToken().data.EmailAddress);
    return errors;
  };
  //console.log(input);
  //input && console.log(input);

  return (
    <div>
      <form className="form-entities">
        <div className="inputWithIcons">
          <span>
            <FaRegEnvelope />
          </span>

          <input
            type="email"
            name="emailAddress"
            placeholder={input.emailAddress}
            className="form-eliments"
            onChange={inputHandler}
          />
          <p className="errors">{errorMessage.emailAddress}</p>
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
        </div>
      </form>
      <Link to="/register" className="start">
        Get started
      </Link>
    </div>
  );
};
export default Form;
