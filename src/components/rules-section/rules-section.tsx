import { PagesLinks } from '../../utils/const';
import { Link } from 'react-router-dom';

function RulesSection() {
  return (
    <div className="text-white text-center border-2 rounded-3xl border-[#D4AF37] max-w-[90%] lg:max-w-4xl md:max-w-lg mx-auto mt-3 p-4 md:p-6 relative">
      {/* Кнопка-крестик в углу */}
      <Link to={PagesLinks.MAIN}>
        <button
          className="absolute top-2 right-2 text-white bg-[#1A1A1A] w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full
          hover:bg-[#D4AF37] hover:shadow-lg transition duration-200 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:h-6 md:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </Link>

      <h1 className='text-[#D4AF37] text-2xl md:text-3xl font-bold'>Rules for &quot;Find the Pair&quot;</h1>
      <h2 className='text-[#D4AF37] text-xl md:text-2xl mt-2'>Goal:</h2>
      <p className="text-sm md:text-base">Match all the pairs of cards by flipping them over to reveal their colors.</p>

      <h2 className='text-[#D4AF37] text-xl md:text-2xl mt-2'>Starting the Game:</h2>
      <p className="text-sm md:text-base">You will see a grid of face-down cards.</p>
      <p className="text-sm md:text-base">Click on any two cards to flip them over.</p>

      <h2 className='text-[#D4AF37] text-xl md:text-2xl mt-2'>Matching Cards:</h2>
      <p className="text-sm md:text-base">If the two cards you flip over have the same color, they stay face-up.</p>
      <p className="text-sm md:text-base">If they do not match, they will flip back down after a short pause.</p>

      <h2 className='text-[#D4AF37] text-xl md:text-2xl mt-2'>Completing the Round:</h2>
      <p className="text-sm md:text-base">Match all the pairs to complete the current round and move on to the next.</p>
      <p className="text-sm md:text-base">Each new round increases the grid size, making it more challenging.</p>

      <h2 className='text-[#D4AF37] text-xl md:text-2xl mt-2'>Time Limit:</h2>
      <p className="text-sm md:text-base">Each round has a specific time limit:</p>
      <p className="text-sm md:text-base">1st round: 20 seconds</p>
      <p className="text-sm md:text-base">2nd round: 60 seconds</p>
      <p className="text-sm md:text-base">3rd round: 100 seconds</p>
      <p className="text-sm md:text-base">If you don’t finish matching all pairs within the time limit, the game ends.</p>

      <h2 className='text-[#D4AF37] text-xl md:text-2xl mt-2'>Winning:</h2>
      <p className="text-sm md:text-base">Successfully match all pairs in the final 6x6 grid to win the game.</p>

      <h2 className='text-[#D4AF37] text-xl md:text-2xl mt-2'>Resetting the Game:</h2>
      <p className="text-sm md:text-base">You can click the reset button at any time to restart the game from the beginning.</p>

      <h2 className='text-[#D4AF37] text-xl md:text-2xl mt-2'>Rounds:</h2>
      <p className="text-sm md:text-base">The game consists of 3 rounds. Each round has a different grid size, starting from a small grid and increasing in size with each round.</p>
    </div>
  );
}

export default RulesSection;
