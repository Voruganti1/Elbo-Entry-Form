import "./ElboEntryForm.css";
import logo from "../assets/elboLogo.png";
import Form from "./Form";

const ElboEntryForm = () => {
  return (
    <div className="container">
      <div className="firstColomn">
        <div className="logo">
          <img src={logo} alt="elbo logo" />
        </div>
        <div className="login">
          <label htmlFor="login">Log in</label>
        </div>
        <Form />
      </div>
    </div>
  );
};
export default ElboEntryForm;
