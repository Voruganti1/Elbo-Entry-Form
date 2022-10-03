import "./App.css";
import RegisterClint from "./Components/RegisterClint";

function App() {
  return (
    <div
      style={{
        height: "inherit",
        background: `url(${process.env.PUBLIC_URL} /images/full-signin-bg.2218d4ca.png
        )`,
      }}
    >
      <RegisterClint />
    </div>
  );
}

export default App;
