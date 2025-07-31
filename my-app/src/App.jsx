import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home_Page from "./components/Home_Page";
import Market_Shop from "./components/Market_Shop";
import Contact from "./components/Contact";
import Sign_Up from "./components/Sign_Up";
import Login_Page from "./components/login_Page";
import Details from "./components/details";
// import landingPageData from "./data/landingPageData.json";

function App() {
  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <div className="logo">Pet Me</div>
          <nav className="main-menu">
            <a href="/Home_Page">Home</a>
            <a href="/login_Page">Login</a>
            <a href="/Sign_Up">Sign Up</a>
            <a href="/Market_Shop">Market Shop</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>
      
      <Router>
        <Routes>
          <Route path="/Home_Page" element={<Home_Page />}/>
          <Route path="/Market_Shop" element={<Market_Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Sign_Up" element={<Sign_Up />} />
          <Route path="/login_Page" element={<Login_Page />} />
          <Route path="/details" element={<Details />} />
          {/* Optional: Default route */}
          <Route path="*" element={<Home_Page />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
