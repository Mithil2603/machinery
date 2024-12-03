import "./App.css";
import NavBar from "./Components/NavBar";
import LandingPage from "./Components/LandingPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes basename="/landingPage">
          <Route path="/" element={<LandingPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
