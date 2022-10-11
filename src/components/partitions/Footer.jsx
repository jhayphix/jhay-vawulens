import "./footer.css";
import { Link } from "react-router-dom";
import { footerNavLinks } from "../../data";
import { footerInsightLinks } from "../../data";

const Footer = () => {
  return (
    <footer
      id="footer-section"
      className="j-bg-primary text-md-start text-light"
    >
      <div className="container-lg">
        {/* Row */}
        <div className="row py-5 justify-content-center align-items-sm-start align-items-center">
          {/* Col 1 */}
          <div className="col-md-4 col-sm-6 col-11">
            <Link
              className="h3 fw-semibold text-light text-md-start text-center"
              to="/"
            >
              JHAY VAWU
              <span className="fw-bold j-text-secondary">LENS</span>
            </Link>
            <p className="my-3 opacity-75">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
              ipsa?
            </p>
            <div className="footer-contact-icons my-4">
              <a
                href="https://wa.me/2330248359918?text=Hi Jhayphix, i need your service"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                href="https://wa.me/2330248359918?text=Hi Jhayphix, i need your service"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://github.com/jhayphix"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://wa.me/2330248359918?text=Hi Jhayphix, i need your service"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="col-md-8 col-sm-6 col-11">
            {/* Col 2 Row */}

            <div className="row">
              {/* col 1 */}

              <div className="col-md-6 col-12 mb-3">
                <h5 className="border-bottom border-3 pb-3">Navigate</h5>
                <ul className="nav flex-column">
                  {footerNavLinks.map(({ name, path }, index) => {
                    return (
                      <li key={index} className="nav-item mb-2">
                        <Link to={path} className="nav-link text-light p-0">
                          {name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Col 2 */}
              <div className="col-md-6 col-12 mb-3">
                <h5 className="border-bottom border-3 border-light pb-3">
                  Navigate
                </h5>
                <ul className="nav flex-column">
                  {footerInsightLinks.map(({ name, path }, index) => {
                    return (
                      <li key={index} className="nav-item mb-2">
                        <Link to={path} className="nav-link text-light p-0">
                          {name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End of Row */}
      </div>
    </footer>
  );
};

export default Footer;
