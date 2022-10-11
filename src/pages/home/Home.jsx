// Static
import "./home.css";

// Section Components
import HeaderSection from "./sections/HeaderSection";
import ProgramsSection from "./sections/ProgramsSection";
import ValuesSection from "./sections/ValuesSection";
import FaqSection from "./sections/FaqSection";
import TestimonialsSection from "./sections/TestimonialsSection";

// Components

const Home = () => {
  return (
    <main style={{ marginBottom: "10rem" }}>
      <HeaderSection />
      <ProgramsSection />
      <ValuesSection />
      <FaqSection />
      <TestimonialsSection />
    </main>
  );
};

export default Home;
