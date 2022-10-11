import { Link } from "react-router-dom";

const PlanCardLg = ({ title, subtitle, price }) => {
  return (
    <div className="card border-0 j-bg-assent-variant-color">
      <div className="card-header text-center j-text-secondary">
        Most Popular
      </div>
      <div className="card-body text-center py-5 px-4">
        <h2 className="h4 card-title">{title}</h2>
        <p className="lead text-muted">{subtitle}</p>
        <p className="my-4 display-4 fw-bold text-primary">{price}</p>
        <div className="card-text text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          vitae magni! Repellat commodi a fuga corporis saepe dolorum.
        </div>
        <Link href="#" className="btn btn-primary btn-lg mt-5">
          Choose Plan
        </Link>
      </div>
    </div>
  );
};

export default PlanCardLg;
