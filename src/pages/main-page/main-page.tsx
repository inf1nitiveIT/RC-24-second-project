import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import HeroSection from '../../components/hero-section/hero-section';

function MainPage () {
  return(
    <>
      <Helmet>
        <title>Pairwise</title>
      </Helmet>
      <Header />
      <HeroSection />
    </>
  );
}

export default MainPage;
