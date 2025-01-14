import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import RulesSection from '../../components/rules-section/rules-section';


function RulesPage () {
  return(
    <>
      <Helmet>
        <title>Rules</title>
      </Helmet>
      <Header />
      <RulesSection />
    </>
  );
}

export default RulesPage;
