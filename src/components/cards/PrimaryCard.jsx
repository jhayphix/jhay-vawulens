const PrimaryCard = ({ programName }) => {
  return (
    <div className="j-primary-card  text-center py-5 px-4">
      <i className="fa-solid fa-snowflake j-icon"></i>
      <h2 className="h5 text-center my-3">{programName}</h2>
      <p className="text-muted text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
        soluta.
      </p>
      <button className="j-btn btn btn-primary rounded-pill my-3">
        Learn More
      </button>
    </div>
  );
};

export default PrimaryCard;
