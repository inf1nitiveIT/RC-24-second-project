import { useState, useEffect } from 'react';
import { shuffleArray, getGridSizeForRound } from '../../utils/utils';
import { BASE_ROUND_TIME, uniqueColors, MAX_GRID_SIZE, ROUND_TIME_INCREMENT, PagesLinks } from '../../utils/const';
import ModalWindow from './modal-window';
import ResetButton from './reset-button';
import MainButton from '../hero-section/main-button';

interface Card {
  id: number;
  color: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const generateCards = (round: number): Card[] => {
  const gridSize = getGridSizeForRound(round);
  const numberOfPairs = (gridSize * gridSize) / 2;
  const pairedColors = shuffleArray([...uniqueColors.slice(0, numberOfPairs), ...uniqueColors.slice(0, numberOfPairs)]);
  return pairedColors.map((color, index) => ({
    id: index,
    color,
    isFlipped: false,
    isMatched: false,
  }));
};

function MemoryGame() {
  const [cards, setCards] = useState<Card[]>(generateCards(0));
  const [round, setRound] = useState<number>(0);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState<number>(BASE_ROUND_TIME);
  const [isTimeOverModalVisible, setIsTimeOverModalVisible] = useState<boolean>(false);
  const [isWinModalVisible, setIsWinModalVisible] = useState<boolean>(false);
  const [isPreview, setIsPreview] = useState<boolean>(true);

  const resetGame = () => {
    setCards(generateCards(0));
    setFlippedCards([]);
    setTimeLeft(BASE_ROUND_TIME);
    setIsTimeOverModalVisible(false);
    setIsWinModalVisible(false);
    setRound(0);
    setIsPreview(true);
  };

  useEffect(() => {
    if (isPreview) {
      const previewTimer = setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((card) => ({ ...card, isFlipped: false }))
        );
        setIsPreview(false);
      }, 1000);
      return () => clearTimeout(previewTimer);
    }
  }, [isPreview]);


  useEffect(() => {
    if (timeLeft <= 0) {
      setIsTimeOverModalVisible(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    const advanceRound = () => {
      const nextRound = round + 1;
      const newTimeLeft = BASE_ROUND_TIME + ROUND_TIME_INCREMENT * nextRound;
      setRound(nextRound);
      setCards(generateCards(nextRound));
      setFlippedCards([]);
      setTimeLeft(newTimeLeft);
      setIsPreview(true);
    };

    const gridSizeForRound = getGridSizeForRound(round);
    const allMatched = cards.every((card) => card.isMatched);
    if (allMatched && gridSizeForRound <= MAX_GRID_SIZE) {
      if (gridSizeForRound === MAX_GRID_SIZE) {
        setIsWinModalVisible(true);
      } else {
        advanceRound();
      }
    }
  }, [cards, round, timeLeft]);


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
    <div className="flex flex-col items-center mt-5">
      <div className="flex flex-col items-center text-lg font-bold mb-4 text-white">
        <p>Round: <span className='text-[#D4AF37] font-bold'>{round + 1}</span> / 3</p>
        <p>Remaining time: <span className='text-[#D4AF37] font-bold'>{timeLeft}</span> seconds</p>
      </div>
      <div className="grid gap-4 my-5"
        style={{ gridTemplateColumns: `repeat(${(round + 1) * 2}, 1fr)` }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="h-24 w-24 flex justify-center items-center cursor-pointer border-[1px] border-[#D4AF37] rounded"
            onClick={() => handleCardClick(card.id)}
            style={{
              backgroundColor: card.isFlipped || card.isMatched || isPreview ? card.color : '#1A1A1A',
            }}
          >
          </div>
        ))}
      </div>
      <ResetButton handler={resetGame} />
      <MainButton
        to={PagesLinks.MAIN}
        className="bg-[#1A1A1A] w-24 h-12 rounded-3xl border-2 border-[#D4AF37] mt-2 transition-all duration-300 ease-in-out hover:bg-[#D4AF37] hover:text-[#1A1A1A] hover:border-[#1A1A1A]"
      >
        Exit
      </MainButton>

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
          message='You successfully matched all the cards!'
          onClose={resetGame}
        />
      )}
    </div>
  );
}

export default MemoryGame;
