import React, { useEffect, useState } from "react";
import { cardImages } from "./utils/constants";
import "./App.scss";
import { Card } from "./Types";
import { SingleCard } from "./components";

const App: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);
  const [disabledCard, setDisabledCard] = useState<boolean>(false);

  const handleShuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffleCards);
    setTurns(0);
  };

  const handleChoiceCard = (card: Card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabledCard(false);
  };
  useEffect(() => {
    handleShuffleCards();
    if (choiceOne && choiceTwo) {
      setDisabledCard(true);

      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards: Card[]) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  return (
    <div className="container-app">
      <h1>Memory Game App</h1>
      <button onClick={handleShuffleCards}>New Game</button>

      <div className="cards-container">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoiceCard={handleChoiceCard}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabledCard}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
};

export default App;
