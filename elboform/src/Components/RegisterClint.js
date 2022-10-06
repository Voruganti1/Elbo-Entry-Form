import "./RegisterClint.css";
import logo from "/Users/Sudha/Projects/Elbo-Entry-Form/elboform/src/Components/elboLogo.png";
import { FaRegEnvelope, FaBuilding, FaUserAlt } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { useState } from "react";

const intialState = {
  emailAddress: "",
  name: "",
  companyName: "",
  serviceId: "",
  password: "",
};

function RegisterClint() {
  const [data, setData] = useState(intialState);
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };
  const signInHandler = () => {};
  console.log(data);
  return (
    <div
      style={{
        background: `url(${process.env.PUBLIC_URL}/images/full-signin-bg.2218d4ca.png)`,
        height: "inherit",
      }}
    >
      <div className="container">
        <div className="logo">
          <img src={logo} alt="elboLogo" />

          <div className="formContainer">
            <form className="form-entities">
              <div className="getStarted">
                <label>Get started</label>
              </div>
              <div className="inputWithIcons ">
                <span>
                  <FaRegEnvelope />
                </span>
                <input
                  name="emailAddress"
                  type="text"
                  placeholder="email"
                  value={data.emailAddress}
                  className="form-eliments"
                  onChange={inputHandler}
                />
              </div>
              <div className="inputWithIcons ">
                <span>
                  <FaUserAlt />
                </span>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={data.name}
                  className="form-eliments"
                  onChange={inputHandler}
                />
              </div>
              <div className="inputWithIcons ">
                <span>
                  <FaBuilding />
                </span>
                <input
                  name="companyName"
                  type="text"
                  placeholder="Company name"
                  value={data.companyName}
                  className="form-eliments"
                  onChange={inputHandler}
                />
              </div>
              <div className="inputWithIcons ">
                <span>
                  <AiFillLock />
                </span>
                <input
                  name="password"
                  type="text"
                  placeholder="Password"
                  value={data.password}
                  className="form-eliments"
                  onChange={inputHandler}
                />
              </div>
              <div>
                <button
                  className="form-eliments signIn"
                  onClick={signInHandler}
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterClint;
