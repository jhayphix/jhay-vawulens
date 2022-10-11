import FaqCard from "../../../components/cards/FaqCard";
import SectionHeader from "../../../components/SectionHeader";

const FaqSection = () => {
  return (
    <section id="faq-section">
      <div className="container">
        <SectionHeader
          className="text-md-start text-center"
          sectionName="FAQs"
          icon="fas fa-question fw-bold"
        />
        <div className="row row-cols-2 g-4 justify-content-center align-items-center">
          <div className="col">
            <FaqCard question="Is your pay monthly membership a contract?" />
          </div>
          <div className="col">
            <FaqCard question="Are refunds available?" />
          </div>
          <div className="col">
            <FaqCard question="Are Covid Certs required for entry?" />
          </div>
          <div className="col">
            <FaqCard question="What do i need to wear for my workout?" />
          </div>
          <div className="col">
            <FaqCard question="What do i need to bring to the gym?" />
          </div>
          <div className="col">
            <FaqCard question="How can i get a gym program design" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
