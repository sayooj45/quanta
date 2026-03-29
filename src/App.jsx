import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Relevance from "./pages/Relevance";
import Synopsis from "./pages/Synopsis";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/relevance" element={<Relevance />} />
          <Route path="/synopsis" element={<Synopsis />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
