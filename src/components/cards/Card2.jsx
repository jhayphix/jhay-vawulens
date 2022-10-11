const Card2 = ({ programName }) => {
  return (
    <div className="j-card-2  text-center py-3 px-3">
      <i className="fa-solid fa-snowflake j-icon"></i>
      <h2 className="h5 text-start my-3">{programName}</h2>
      <p className="text-muted text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
        soluta.
      </p>
    </div>
  );
};

export default Card2;
