import React from "react";
import "./RegisterClint.css";
import logo from "/Users/Sudha/Projects/Elbo-Entry-Form/elboform/src/Components/elboLogo.png";
import { FaRegEnvelope } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";

function RegisterClint() {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="elboLogo" />
      </div>
      <div>
        <label>Get started</label>
      </div>
      <div>
        <span>
          <FaRegEnvelope />
        </span>
        <input type="text" value="email" />
      </div>
      <div>
        <input type="text" value="Your name" />
      </div>
      <div>
        <input type="text" value="Company name" />
      </div>
      <div>
        <span>
          <AiFillLock />
        </span>
        <input type="text" value="Password" />
      </div>
    </div>
  );
}

export default RegisterClint;
