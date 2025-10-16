import { type FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Login from './components/Login/Login';
import Favorites from './components/Favorites/Favorites';
import Offer from './components/Offer/Offer';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import type { Offer as OfferType } from './mocks/offers';

interface AppProps {
  placesCount: number;
  offers: OfferType[];
}

const App: FC<AppProps> = ({ placesCount, offers }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage placesCount={placesCount} offers={offers} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={
          <PrivateRoute>
            <Favorites offers={offers} />
          </PrivateRoute>
        } />
        <Route path="/offer/:id" element={<Offer offers={offers} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
