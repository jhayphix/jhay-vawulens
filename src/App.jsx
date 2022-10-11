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
        <Route path="jhay-vawulens" element={<Home />} />
        <Route path="jhay-vawulens/about" element={<About />} />
        <Route path="jhay-vawulens/plans" element={<Plans />} />
        <Route path="jhay-vawulens/gallery" element={<Gallery />} />
        <Route path="jhay-vawulens/trainers" element={<Trainers />} />
        <Route path="jhay-vawulens/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
