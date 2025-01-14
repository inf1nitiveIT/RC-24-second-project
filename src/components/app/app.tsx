import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import GamePage from '../../pages/game-page/game-page';
import RulesPage from '../../pages/rules-page/rules-page';
import ContactPage from '../../pages/contact-page/contact-page';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={''} element={<MainPage />}/>
          <Route path={'/game'} element={<GamePage />}/>
          <Route path={'/rules'} element={<RulesPage />}/>
          <Route path={'/contact'} element={<ContactPage />}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
