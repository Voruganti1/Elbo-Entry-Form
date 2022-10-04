import ElboEntryForm from "./Components/ElboEntryForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import RegisterClint from "./Components/RegisterClint";

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
