import PrimaryCard from "../../../components/cards/PrimaryCard";
import SectionHeader from "../../../components/SectionHeader";

const ProgramsSection = () => {
  return (
    <section id="home-programs-section">
      <div className="container-lg">
        <SectionHeader
          className="text-md-start text-center"
          sectionName="Our Program"
          icon="fas fa-crown"
        />
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <PrimaryCard programName="Program One" />
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <PrimaryCard programName="Program Two" />
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <PrimaryCard programName="Program Three" />
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <PrimaryCard programName="Program Four" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
