const GalleryCard = ({ cardImg }) => {
  return (
    <div
      className="gallery-card-img-container "
      style={{
        background: `url(${cardImg}) no-repeat center center/cover`,
      }}
    ></div>
  );
};

export default GalleryCard;
