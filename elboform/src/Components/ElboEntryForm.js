import "./ElboEntryForm.css";
import logo from "./elboLogo.png";
import promocontent from "./promocontent.png";

const ElboEntryForm = () => {
  return (
    <div className="container">
      <div className="firstColomn">
        <div className="logo">
          <img src={logo} alt="elbo logo" />
        </div>
      </div>
      <div className="secondColomn ">
        <img className="logo1" src={promocontent} alt="Promo content" />
      </div>
    </div>
  );
};
export default ElboEntryForm;
