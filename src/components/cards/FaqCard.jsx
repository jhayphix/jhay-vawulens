import { useState } from "react";

const FaqCard = ({ question }) => {
  const [showFaq, setShowFaq] = useState(false);
  const showFaqFunc = () => {
    setShowFaq(!showFaq);
  };
  return (
    <div className="j-faq-card p-4 shadow">
      <div
        onClick={showFaqFunc}
        className="d-flex justify-content-between align-items-center"
      >
        <h2 className="h5 text-light mt-2" style={{ cursor: "pointer" }}>
          {question}
        </h2>

        <span className="h4 cursor-pointer show-faq-btn">
          {showFaq ? "-" : "+"}
        </span>
      </div>
      <p className={`text-muted mt-3 ${showFaq ? "d-block" : "d-none"}`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        laudantium illo sint distinctio facilis, atque aliquam. Exercitationem
        officiis porro officia quidem molestias. A, quos modi.
      </p>
    </div>
  );
};

export default FaqCard;
