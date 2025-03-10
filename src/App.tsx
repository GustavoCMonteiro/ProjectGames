import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import NavMenu from "./Components/navMenu/NavMenu";

function App() {
  return (
    <Router>
      <NavMenu>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </NavMenu>
    </Router>
  );
}

export default App;
