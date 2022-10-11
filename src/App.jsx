import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Plans from "./pages/plans/Plans";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notFound/NotFound";
import Navbar from "./components/partitions/Navbar";
import Footer from "./components/partitions/Footer";
import Trainers from "./pages/trainers/Trainers";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="plans" element={<Plans />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
