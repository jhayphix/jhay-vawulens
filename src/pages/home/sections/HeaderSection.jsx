const HeaderSection = () => {
  return (
    <header id="home-header-section">
      <div className="container-lg h-100">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-lg-6 col-8 text-lg-start text-center">
            <p className="lead j-text-secondary">#100DaysOfWorkOut</p>
            <h2 className="text-light h1">
              Join The Legends Of The Fitness World
            </h2>
            <p className="lead text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              qui tempore tenetur omnis eligendi. Corrupti.
            </p>
            <a
              href="#home-programs-section"
              className="btn btn-lg btn-primary rounded-pill my-4"
            >
              Get Started
            </a>
          </div>
          <div className="col-6 justify-content-end d-lg-flex d-none">
            <div className="home-right"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
