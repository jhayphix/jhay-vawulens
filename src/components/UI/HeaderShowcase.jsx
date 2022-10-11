const HeaderShowcase = ({ showcaseImg, pageTitle }) => {
  return (
    <section className="p-0 position-relative" style={{ height: "20rem" }}>
      <div
        className="w-100 h-100 j-img-overlay"
        style={{
          background: `url(${showcaseImg}) no-repeat center center/cover`,
        }}
      ></div>
      <div className="row justify-content-center align-items-center j-overlay-text">
        <div className="text-center col-lg-6 col-md-10 col-11">
          <h2 className="h2 my-3">{pageTitle}</h2>
          <div className="lead text-muted">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            beatae odio cupiditate vero, eum recusandae?
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderShowcase;
