import { type FC } from 'react';
import Sprite from '../Sprite/Sprite';
import { Link } from 'react-router-dom';

const NotFound: FC = () => (
  <>
    <Sprite />
    <div className="page page--gray page--not-found">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--not-found">
        <div className="container">
          <section className="not-found">
            <h1 className="not-found__title">404 Not Found</h1>
            <p className="not-found__description">
                                Страницы, которую вы ищете, не существует.
            </p>
          </section>
        </div>
      </main>
    </div>
  </>
);

export default NotFound;
