import HeaderShowcase from "../../components/UI/HeaderShowcase";
import "./trainers.css";
import showcaseImg from "../../images/image5.jpg";
import TrainersCard from "./TrainersCard";
import { trainers } from "../../data";

const Trainers = () => {
  return (
    <main>
      <HeaderShowcase pageTitle="Our Trainers" showcaseImg={showcaseImg} />
      <section>
        <div className="container-lg">
          <div className="row g-5 row-cols-lg-3 row-cols-sm-2 row-cols-1 align-items-center">
            {trainers.map(({ name, job, avatar }, index) => {
              return (
                <div className="col" key={index}>
                  <TrainersCard
                    trainerImg={avatar}
                    trainerName={name}
                    trainerJob={job}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Trainers;
