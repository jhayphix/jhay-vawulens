import { NavLink, Link } from "react-router-dom";
import { links } from "../../data";
import "./navbar.css";

const Navbar = () => (
  <nav
    id="j-navbar-section"
    className="navbar sticky-top navbar-expand-md j-bg-primary text-light py-3"
  >
    <div className="container-lg">
      {/* <!-- Nav Brand --> */}
      <Link className="navbar-brand fw-bold text-light" to="/">
        JHAY VAWU
        <span className="fw-bold j-text-secondary">LENS</span>
      </Link>

      {/* <!-- Nav Mobile Menu --> */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="j-nav-collapse collapse navbar-collapse justify-content-end align-items-center"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          <li className="nav-item me-2">
            <NavLink
              to="/jhay-vawulens"
              className={({ isActive }) =>
                isActive
                  ? "j-nav-active nav-link text-light"
                  : "nav-link text-light"
              }
              end
            >
              HOME
            </NavLink>
          </li>
          {links.map(({ name, path, end }, index) => {
            return (
              <li className="j-nav-li nav-item me-2" key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "j-nav-active nav-link text-light"
                      : "nav-link text-light"
                  }
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
