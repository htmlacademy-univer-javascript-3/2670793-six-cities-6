import { type FC } from 'react';
import Sprite from '../Sprite/Sprite';
import OffersList from '../OffersList/OffersList';
import Map from '../Map/Map';
import CitiesList from '../CitiesList/CitiesList';
import Spinner from '../Spinner/Spinner';
import { useAppSelector, useAppDispatch, selectOffersByCity, selectCity, changeCity, selectPointsByCity, selectOffersLoadingStatus, selectCities } from '../../store';

const MainPage: FC = () => {
  const offers = useAppSelector(selectOffersByCity);
  const city = useAppSelector(selectCity);
  const points = useAppSelector(selectPointsByCity);
  const cities = useAppSelector(selectCities);
  const isOffersLoading = useAppSelector(selectOffersLoadingStatus);
  const dispatch = useAppDispatch();

  const getCityByName = (cityName: string) => cities.find((candidateCity) => candidateCity.title === cityName);

  const handleCityClick = (cityName: string) => {
    const selectedCity = getCityByName(cityName);
    if (selectedCity) {
      dispatch(changeCity(selectedCity));
    }
  };
  if (isOffersLoading) {
    return (
      <>
        <Sprite />
        <div className="page page--gray page--main">
          <main className="page__main page__main--index">
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <Spinner />
                </section>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }

  return (
    <>
      <Sprite />

      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">3</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <CitiesList cities={cities} activeCity={city} onCityClick={handleCityClick} />
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {city.title}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>{' '}
                  <span className="places__sorting-type" tabIndex={0}>
                                        Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <OffersList offers={offers} />
              </section>
              <div className="cities__right-section">
                <Map city={city} points={points} />

              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default MainPage;
