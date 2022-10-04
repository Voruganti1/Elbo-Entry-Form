import React from "react";
import "./Form.css";
import { FaRegEnvelope } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegisterClint from "../Components/RegisterClint";
import { getToken, validateForm } from "../utils/form-handling";

const initialState = {
  emailAddress: "",
  password: "",
};
const Form = () => {
  const [input, setInput] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState({});

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const signInHandler = (event) => {
    event.preventDefault();
    const response = getToken(input);
    setErrorMessage(response);
    // setErrorMessage(validateForm(input));
    // input &&
    //   window.localStorage.setItem("user-info", JSON.stringify({ input }));
  };

  console.log(input);

  return (
    <div>
      <form className="form-entities">
        <div className="inputWithIcons">
          <span>
            <FaRegEnvelope />
          </span>

          <input
            type="text"
            name="emailAddress"
            value={input.emailAddress}
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
            value={input.password}
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
          <Link to="/register" className="start">
            Get started
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Form;
