import React, { useState } from "react";
import { cardImages } from "./utils/constants";
import "./App.scss";
import { Card } from "./Types";
import { SingleCard } from "./components";

const App: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState(0);

  const handleShuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffleCards);
    setTurns(0);
  };
  return (
    <div className="container-app">
      <h1>Memory Game App</h1>
      <button onClick={handleShuffleCards}>New Game</button>

      <div className="cards-container">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default App;
