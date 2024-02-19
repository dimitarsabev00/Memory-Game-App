import React from "react";
import "./styles.scss";
import { Card } from "../../Types";

type SingleCardProps = {
  card: Card;
  handleChoiceCard: (card: Card) => void;
  flipped: boolean;
  disabled: boolean;
};

const SingleCard: React.FC<SingleCardProps> = ({
  card,
  handleChoiceCard,
  flipped,
  disabled,
}) => {
  return (
    <div className="card">
      <div className={flipped ? "flipped-card" : ""}>
        <img className="front-card" src={card.src} alt="card front" />
        <img
          className="back-card"
          src={"../src/assets/images/cover.png"}
          onClick={() => {
            if (!disabled) handleChoiceCard(card);
          }}
          alt="card back"
        />
      </div>
    </div>
  );
};

export default SingleCard;
