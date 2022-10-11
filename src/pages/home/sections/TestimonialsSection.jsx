import { useState } from "react";
import { testimonials } from "../../../data";
import SectionHeader from "../../../components/SectionHeader";

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  let { name, job, msg, avatar } = testimonials[index];

  const nextTestimonial = () => {
    setIndex((prev) => prev + 1);
    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };
  const prevTestimonial = () => {
    setIndex((prev) => prev - 1);
    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };
  return (
    <section id="testimonials-section">
      <div className="container">
        <SectionHeader
          className="text-center"
          sectionName="Testimonials"
          icon="fa fa-quote-left"
        />
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 col-md-10 col-12 position-relative">
            <div className="j-testimonial-card p-4 pt-5">
              <div className="j-testimonial-img-container">
                <img src={avatar} alt="Jhayphix" />
              </div>
              <p className="text-muted">{msg}</p>
              <h2 className="h6">{name}</h2>
              <p className="text-muted">{job}</p>
            </div>
            <div className="testimonial-btn-container">
              <i
                onClick={prevTestimonial}
                className="fa-solid fa-less-than btn rounded-circle me-4 p-3"
              ></i>
              <i
                onClick={nextTestimonial}
                className="fa-solid fa-greater-than btn rounded-circle p-3"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
