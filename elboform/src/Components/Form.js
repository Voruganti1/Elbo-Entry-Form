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
  const inputHandler = (event) => {
    const [name, value] = event.target;
    setInput({ ...input, [name]: value });
  };
  console.log(input);
  const signInHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form action="" className="form-entities">
        <div className="inputWithIcons">
          <span>
            <FaRegEnvelope />
          </span>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={input.email}
            className="form-eliments"
            onChange={inputHandler}
          />
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
          <label htmlFor="" className="label">
            Forgot?
          </label>
        </div>
        <div>
          <button className="form-eliments signIn" onClick={signInHandler}>
            Sign in
          </button>
        </div>
        <div>
          <label htmlFor="">Not registered?</label>
          <button>Get started</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
