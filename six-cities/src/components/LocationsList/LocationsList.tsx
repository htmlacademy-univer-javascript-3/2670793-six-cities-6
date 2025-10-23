import { type FC } from 'react';
import { CITIES } from '../../const';
import type { City } from '../../mocks/city';

interface LocationsListProps {
  activeCity: City;
  onCityClick: (cityName: string) => void;
}

const LocationsList: FC<LocationsListProps> = ({ activeCity, onCityClick }) => {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((cityName) => (
          <li key={cityName} className="locations__item">
            <a
              className={`locations__item-link tabs__item ${
                activeCity.title === cityName ? 'tabs__item--active' : ''
              }`}
              href="#"
              onClick={(evt) => {
                evt.preventDefault();
                onCityClick(cityName);
              }}
            >
              <span>{cityName}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LocationsList;
