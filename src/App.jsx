import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { GalleryPages } from "./components/pages/Gallery";
import AboutPages from "./components/pages/About";
import ContactPage from "./components/pages/Contact";
import ScrollToTop from "./components/CreateUi";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/about" element={<AboutPages />} />
          <Route path="/gallery" element={<GalleryPages />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;