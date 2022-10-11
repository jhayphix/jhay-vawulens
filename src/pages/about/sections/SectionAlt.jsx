const SectionsAlt = ({ sectionImg, aboutSectionHeader }) => {
  return (
    <section>
      <div className="container-lg">
        <div className="row row-cols-lg-2 row-cols-1 g-4 justify-content-center align-items-center">
          <div className="col">
            <h2 className="display-5 fw-semibold text-lg-start text-center my-4">
              {aboutSectionHeader}
            </h2>
            <p className="lead">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              culpa ullam cum in ipsum provident, sed debitis doloremque odio
              necessitatibus.
            </p>
            <p className="lead text-muted">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              culpa ullam cum in ipsum provident, sed debitis doloremque odio
              necessitatibus.
            </p>
            <p className="lead text-muted">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              culpa ullam cum in ipsum provident, sed debitis doloremque odio
              necessitatibus.
            </p>
          </div>
          <div className="col d-flex justify-content-lg-end justify-content-center">
            <div
              className="our-story-img-container "
              style={{
                background: `url(${sectionImg}) no-repeat center center/cover`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionsAlt;
