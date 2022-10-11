import "./gallery.css";
import showcaseImg from "../../images/image4.jpg";
import HeaderShowcase from "../../components/UI/HeaderShowcase";
import GalleryCard from "./sections/GalleryCard";

import { galleryCardImages } from "../../data";
const Gallery = () => {
  return (
    <main>
      <HeaderShowcase pageTitle="Our Gallery" showcaseImg={showcaseImg} />
      <section className="">
        <div className="container">
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-5">
            {galleryCardImages.map(({ img }, index) => {
              return (
                <div className="col" key={index}>
                  <GalleryCard cardImg={img} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
