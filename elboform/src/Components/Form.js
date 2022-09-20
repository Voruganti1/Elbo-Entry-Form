import React from "react";
import "./Form.css";
import { FaRegEnvelope } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
const Form = () => {
  return (
    <div>
      <form action="" className="form-entities">
        <div className="inputWithIcons">
          <span>
            <FaRegEnvelope />
          </span>
          <input type="text" value={"email"} className="form-eliments" />
        </div>
        <div className="inputWithIcons">
          <span>
            <AiFillLock />
          </span>
          <input type="text" value={"password"} className="form-eliments" />
          <label htmlFor="" className="label">
            Forgot?
          </label>
        </div>
        <div>
          <button className="form-eliments signIn">Sign in</button>
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
