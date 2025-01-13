import { useState, useEffect } from 'react';
import { shuffleArray } from '../../utils/utils';
import { GAME_TIME, uniqueColors } from '../../utils/const';
import ModalWindow from './modal-window';
import ResetButton from './reset-button';

interface Card {
  id: number;
  color: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const generateCards = (): Card[] => {
  const pairedColors = shuffleArray([...uniqueColors, ...uniqueColors]);
  return pairedColors.map((color, index) => ({
    id: index,
    color,
    isFlipped: false,
    isMatched: false,
  }));
};

function MemoryGame() {
  const [cards, setCards] = useState<Card[]>(generateCards());
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [isTimeOverModalVisible, setIsTimeOverModalVisible] = useState<boolean>(false);
  const [isWinModalVisible, setIsWinModalVisible] = useState<boolean>(false);

  const resetGame = () => {
    setCards(generateCards());
    setFlippedCards([]);
    setTimeLeft(60);
    setIsTimeOverModalVisible(false);
    setIsWinModalVisible(false);
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsTimeOverModalVisible(true);
      return;
    }

    const allMatched = cards.every((card) => card.isMatched);
    if (allMatched) {
      setIsWinModalVisible(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, cards]);


  const handleCardClick = (index: number): void => {
    if (
      flippedCards.length === 2 ||
      cards[index].isFlipped ||
      cards[index].isMatched
    ) {
      return;
    }
    const newCards = [...cards];
    newCards[index].isFlipped = true;
    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);
    setCards(newCards);

    if (newFlippedCards.length === 2) {
      const [first, second] = newFlippedCards;
      if (newCards[first]?.color === newCards[second]?.color) {
        setTimeout(() => {
          newCards[first].isMatched = true;
          newCards[second].isMatched = true;
          setFlippedCards([]);
          setCards(newCards);
        }, 500);
      } else {
        setTimeout(() => {
          newCards[first].isFlipped = false;
          newCards[second].isFlipped = false;
          setFlippedCards([]);
          setCards(newCards);
        }, 1000);
      }
    }
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="text-lg font-bold mb-4 text-white">
        Remaining time: <span className='text-[#D4AF37] font-bold'>{timeLeft}</span> seconds
      </div>
      <div className="grid grid-cols-4 gap-4 my-5">
        {cards.map((card) => (
          <div
            key={card.id}
            className="h-24 w-24 flex justify-center items-center cursor-pointer border-[1px] border-[#D4AF37] rounded"
            onClick={() => handleCardClick(card.id)}
            style={{
              backgroundColor: card.isFlipped || card.isMatched ? card.color : '#1A1A1A',
            }}
          >
          </div>
        ))}
      </div>
      <ResetButton handler={resetGame} />

      {isTimeOverModalVisible && (
        <ModalWindow
          title="Time is up!"
          message="You ran out of time to finish the game."
          onClose={resetGame}
        />
      )}

      {isWinModalVisible && (
        <ModalWindow
          title="Congratulations!"
          message={`You successfully matched all the cards in ${GAME_TIME - timeLeft} seconds!`}
          onClose={resetGame}
        />
      )}
    </div>
  );
}

export default MemoryGame;
