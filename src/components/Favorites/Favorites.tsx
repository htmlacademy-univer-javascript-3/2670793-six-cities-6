import { type FC } from 'react';
import FavoritesCard from './FavoritesCard/FavoritesCard';
import Sprite from '../Sprite/Sprite';
import Header from '../Header/Header';
import { useAppSelector, selectOffers } from '../../store';
import type { Offer } from '../../types/offer';
import logo from '../../../public/img/logo.svg?url';

const Favorites: FC = () => {
  const offers = useAppSelector(selectOffers);
  // Фильтруем только избранные предложения
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  // Группируем по городам
  const offersByCity = favoriteOffers.reduce((acc, offer) => {
    const cityName = offer.city.name;
    if (!acc[cityName]) {
      acc[cityName] = [];
    }
    acc[cityName].push(offer);
    return acc;
  }, {} as Record<string, Offer[]>);

  const handleTypeConversion = (type: Offer['type']) => {
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
                {Object.entries(offersByCity).map(([cityName, cityOffers]) => (
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
                          type={handleTypeConversion(offer.type)}
                          isPremium={offer.isPremium}
                          isBookmarked={offer.isFavorite}
                        />
                      ))}
                    </div>
                  </li>
                ))}
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
