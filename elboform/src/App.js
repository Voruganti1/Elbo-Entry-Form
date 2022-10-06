import "./App.css";
import RegisterClint from "./Components/RegisterClint";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ElboEntryForm from "./Components/ElboEntryForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ElboEntryForm />} />
        <Route path="/register" element={<RegisterClint />} />
      </Routes>
    </Router>
  );
}

export default App;
