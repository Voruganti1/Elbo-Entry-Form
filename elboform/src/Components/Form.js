import React from "react";
import "./Form.css";
import { FaRegEnvelope } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { useState } from "react";
const initialState = {
  email: "",
  password: "",
};
const Form = () => {
  const [input, setInput] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState({});
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  console.log(input);
  const signInHandler = (event) => {
    event.preventDefault();
    setErrorMessage(validateForm(input));
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
          <button className="start">Get started</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
