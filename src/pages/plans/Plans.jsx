import HeaderShowcase from "../../components/UI/HeaderShowcase";
import showcaseImg from "../../images/image12.jpeg";
import "./plans.css";
import PlanCard from "./components/PlanCard";
import PlanCardLg from "./components/PlanCardLg";
import { pricingPlan } from "../../data";

const Plans = () => {
  const goldPlan = pricingPlan[0];
  const silverPlan = pricingPlan[1];
  const platinum = pricingPlan[2];

  return (
    <main>
      <HeaderShowcase pageTitle="Membership Plans" showcaseImg={showcaseImg} />
      <section>
        <div className="container-lg">
          <div className="row justify-content-center align-items-center my-5 g-0">
            <div className="col-8 col-lg-4 col-xl-3">
              <PlanCard
                title={goldPlan.title}
                subtitle={goldPlan.subtitle}
                price={goldPlan.price}
              />
            </div>

            <div className="col-9 col-lg-4 border border-primary rounded border-2">
              <PlanCardLg
                title={silverPlan.title}
                subtitle={silverPlan.subtitle}
                price={silverPlan.price}
              />
            </div>

            <div className="col-8 col-lg-4 col-xl-3">
              <PlanCard
                title={platinum.title}
                subtitle={platinum.subtitle}
                price={platinum.price}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Plans;
