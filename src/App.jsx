import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Relevance from "./pages/Relevance";
import Synopsis from "./pages/Synopsis";
import ChapterOne from "./components/chapters/ChapterOne";
import ChapterTwo from "./components/chapters/ChapterTwo";
import ChapterThree from "./components/chapters/ChapterThree";
import ChapterFour from "./components/chapters/ChapterFour";
import ChapterFive from "./components/chapters/ChapterFive";
import ChapterSix from "./components/chapters/ChapterSix";
import Abstract from "./components/chapters/Abstract";
import ScrollToTop from "./components/ScrollTOTop";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consulting" element={<Contact />} />
          <Route path="/relevance" element={<Relevance />} />
          <Route path="/synopsis" element={<Synopsis />} />
          <Route path="/chapter-one" element={<ChapterOne />} />
          <Route path="/chapter-two" element={<ChapterTwo />} />
          <Route path="/chapter-three" element={<ChapterThree />} />
          <Route path="/chapter-four" element={<ChapterFour />} />
          <Route path="/chapter-five" element={<ChapterFive />} />
          <Route path="/chapter-six" element={<ChapterSix />} />
          <Route path="/abstract" element={<Abstract />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
