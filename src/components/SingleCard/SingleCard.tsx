import React from "react";
import "./styles.scss";
import { Card } from "../../Types";

type SingleCardProps = {
  card: Card;
  handleChoiceCard: (card: Card) => void;
};

const SingleCard: React.FC<SingleCardProps> = ({ card, handleChoiceCard }) => {
  return (
    <div className="card">
      <div>
        <img className="front-card" src={card.src} alt="card front" />
        <img
          className="back-card"
          src={"../src/assets/images/cover.png"}
          onClick={() => {
            handleChoiceCard(card);
          }}
          alt="card back"
        />
      </div>
    </div>
  );
};

export default SingleCard;
