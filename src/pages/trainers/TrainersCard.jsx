const TrainersCard = ({ trainerImg, trainerName, trainerJob }) => {
  return (
    <div className="trainers-card card py-3 px-3">
      <img src={trainerImg} className="card-img-top" alt="" />
      <div className="card-body p-0 py-2 mt-1 text-center">
        <h5 className="card-title my-3">{trainerName}</h5>
        <p className="card-text text-muted mb-4">{trainerJob}</p>
        <div className="trainers-icons my-2">
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
    </div>
  );
};

export default TrainersCard;
