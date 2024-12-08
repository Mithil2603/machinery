import "./App.css";
import NavBar from "./Components/NavBar";
import LandingPage from "./Components/LandingPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Footer from "./Components/Footer";
import Products from "./Components/Products";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes basename="/landingPage">
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
