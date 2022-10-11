import { Link } from "react-router-dom";

const PlanCard = ({ title, subtitle, price }) => {
  return (
    <div className="card border-0 j-bg-assent-variant-color">
      <div className="card-body text-center py-3 px-4">
        <h2 className="h4 card-title">{title}</h2>
        <p className="lead text-muted">{subtitle}</p>
        <p className="my-4 display-4 fw-bold text-primary">
          {price} <span className="lead text-muted">/mo</span>
        </p>
        <div className="card-text text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          vitae
        </div>
        <Link href="#" className="btn btn-outline-primary btn-lg mt-5">
          Choose Plan
        </Link>
      </div>
    </div>
  );
};

export default PlanCard;
