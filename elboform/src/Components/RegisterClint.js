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
      <div className="formContainer">
        <form className="form-entities">
          <div>
            <label>Get started</label>
          </div>
          <div className="inputWithIcons ">
            <span>
              <FaRegEnvelope />
            </span>
            <input type="text" value="email" className="form-eliments" />
          </div>
          <div>
            <input type="text" value="Your name" className="form-eliments" />
          </div>
          <div>
            <input type="text" value="Company name" className="form-eliments" />
          </div>
          <div className="inputWithIcons ">
            <span>
              <AiFillLock />
            </span>
            <input type="text" value="Password" className="form-eliments" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterClint;
