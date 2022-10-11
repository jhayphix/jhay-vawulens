import HeaderShowcase from "../../components/UI/HeaderShowcase";
import "./contact.css";
import showcaseImg from "../../images/image1.jpg";

const Contact = () => {
  return (
    <main>
      <HeaderShowcase showcaseImg={showcaseImg} pageTitle="Contact Us" />
      <section>
        <div className="container">
          <div className="contact-icons">
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
      </section>
    </main>
  );
};

export default Contact;
