import { type FC } from 'react';
import type { City } from '../../types/city';

interface CitiesListProps {
  cities: City[];
  activeCity: City;
  onCityClick: (cityName: string) => void;
}

const CitiesList: FC<CitiesListProps> = ({ cities, activeCity, onCityClick }) => (
  <section className="locations container">
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city.title} className="locations__item">
          <a
            className={`locations__item-link tabs__item ${
              activeCity.title === city.title ? 'tabs__item--active' : ''
            }`}
            href="#"
            onClick={(evt) => {
              evt.preventDefault();
              onCityClick(city.title);
            }}
          >
            <span>{city.title}</span>
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default CitiesList;
