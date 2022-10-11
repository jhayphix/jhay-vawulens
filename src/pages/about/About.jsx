import HeaderShowcase from "../../components/UI/HeaderShowcase";
import AboutSections from "./sections/AboutSections";
import SectionsAlt from "./sections/SectionAlt";
import "./about.css";
import showcaseImg from "../../images/image2.jpg";
import ourStorySectionImg from "../../images/image2.jpg";
import ourMissionSectionImg from "../../images/image5.jpg";
import ourVisionSectionImg from "../../images/image8.jpeg";

const About = () => {
  return (
    <main>
      {/* Showcase */}
      <HeaderShowcase pageTitle="About Us" showcaseImg={showcaseImg} />
      <AboutSections
        aboutSectionHeader="Our Story"
        sectionImg={ourStorySectionImg}
      />
      <SectionsAlt
        aboutSectionHeader="Our Vision"
        sectionImg={ourVisionSectionImg}
      />
      <AboutSections
        aboutSectionHeader="Our Mission"
        sectionImg={ourMissionSectionImg}
      />
    </main>
  );
};

export default About;
