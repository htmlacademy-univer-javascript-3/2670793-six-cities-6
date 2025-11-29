import { type FC, useMemo } from 'react';
import FavoritesCard from './FavoritesCard/FavoritesCard';
import Sprite from '../Sprite/Sprite';
import Header from '../Header/Header';
import { useAppSelector, selectFavoriteOffersByCity } from '../../store';
import type { Offer } from '../../types/offer';
import logo from '../../../public/img/logo.svg?url';

const getTypeDisplayName = (type: Offer['type']) => {
  switch (type) {
    case 'apartment':
      return 'Apartment';
    case 'room':
      return 'Private room';
    case 'house':
      return 'House';
    default:
      return 'Hotel';
  }
};

const Favorites: FC = () => {
  const offersByCity = useAppSelector(selectFavoriteOffersByCity);

  const citySections = useMemo(() => {
    return Object.entries(offersByCity).map(([cityName, cityOffers]) => (
      <li key={cityName} className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{cityName}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {cityOffers.map((offer) => (
            <FavoritesCard
              key={offer.id}
              id={offer.id}
              image={offer.previewImage}
              price={offer.price}
              rating={offer.rating}
              title={offer.title}
              type={getTypeDisplayName(offer.type)}
              isPremium={offer.isPremium}
              isBookmarked={offer.isFavorite}
            />
          ))}
        </div>
      </li>
    ));
  }, [offersByCity]);

  return (
    <>
      <Sprite />
      <div className="page">
        <Header showNavigation />

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {citySections}
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src={logo} alt="6 cities logo" width="64" height="33" />
          </a>
        </footer>
      </div>
    </>
  );
};

export default Favorites;
