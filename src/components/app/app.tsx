import { HelmetProvider } from 'react-helmet-async';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import GamePage from '../../pages/game-page/game-page';
import RulesPage from '../../pages/rules-page/rules-page';
import ContactPage from '../../pages/contact-page/contact-page';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path={''} element={<MainPage />}/>
          <Route path={'/game'} element={<GamePage />}/>
          <Route path={'/rules'} element={<RulesPage />}/>
          <Route path={'/contact'} element={<ContactPage />}/>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
