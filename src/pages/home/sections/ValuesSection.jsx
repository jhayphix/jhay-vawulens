import valueImg from "../../../images/image1.jpg";

import Card2 from "../../../components/cards/Card2";
import SectionHeader from "../../../components/SectionHeader";

const ValuesSection = () => {
  return (
    <section id="values-section">
      <div className="container-lg">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-5 me-lg-5 col-md-10 col-12">
            <div className="j-value-img-container">
              <img className="shadow-lg" src={valueImg} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-10 col-12">
            <SectionHeader
              className="text-md-start text-center"
              sectionName="Our Values"
              icon="fa-solid fa-gem"
            />
            <p className="lead text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quas
              aliquid odio maiores eveniet quaerat.
            </p>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6 col-sm-6 col-12 mb-4">
                <Card2 programName="Program One" />
              </div>
              <div className="col-md-6 col-sm-6 col-12 mb-4">
                <Card2 programName="Program One" />
              </div>
              <div className="col-md-6 col-sm-6 col-12 mb-4">
                <Card2 programName="Program One" />
              </div>
              <div className="col-md-6 col-sm-6 col-12 mb-4">
                <Card2 programName="Program One" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
