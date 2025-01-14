import MemoryGame from '../../components/memory-game/memory-game';
import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';

function GamePage () {
  return(
    <>
      <Helmet>
        <title>Pairwise Game</title>
      </Helmet>
      <Header />
      <MemoryGame />
    </>
  );
}

export default GamePage;
