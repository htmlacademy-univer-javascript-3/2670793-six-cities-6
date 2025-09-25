import FavoritesCard from './FavoritesCard/FavoritesCard';

interface FavoritePlace {
    id: string;
    image: string;
    price: number;
    rating: number;
    title: string;
    type: string;
    isPremium: boolean;
    isBookmarked: boolean;
}

const Favorites = () => {
    const favoritePlaces: FavoritePlace[] = [
        {
            id: '1',
            image: 'img/apartment-small-03.jpg',
            price: 180,
            rating: 5,
            title: 'Nice, cozy, warm big bed apartment',
            type: 'Apartment',
            isPremium: true,
            isBookmarked: true
        },
        {
            id: '2',
            image: 'img/room-small.jpg',
            price: 80,
            rating: 4,
            title: 'Wood and stone place',
            type: 'Private room',
            isPremium: false,
            isBookmarked: true
        },
        {
            id: '3',
            image: 'img/apartment-small-04.jpg',
            price: 180,
            rating: 5,
            title: 'White castle',
            type: 'Apartment',
            isPremium: false,
            isBookmarked: true
        }
    ];

    return (
        <>
            <div style={{ display: 'none' }}>
                <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
            </div>

            <div className="page">
                <header className="header">
                    <div className="container">
                        <div className="header__wrapper">
                            <div className="header__left">
                                <a className="header__logo-link" href="main.html">
                                    <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
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

                <main className="page__main page__main--favorites">
                    <div className="page__favorites-container container">
                        <section className="favorites">
                            <h1 className="favorites__title">Saved listing</h1>
                            <ul className="favorites__list">
                                <li className="favorites__locations-items">
                                    <div className="favorites__locations locations locations--current">
                                        <div className="locations__item">
                                            <a className="locations__item-link" href="#">
                                                <span>Amsterdam</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="favorites__places">
                                        <FavoritesCard
                                            image={favoritePlaces[0].image}
                                            price={favoritePlaces[0].price}
                                            rating={favoritePlaces[0].rating}
                                            title={favoritePlaces[0].title}
                                            type={favoritePlaces[0].type}
                                            isPremium={favoritePlaces[0].isPremium}
                                            isBookmarked={favoritePlaces[0].isBookmarked}
                                        />

                                        <FavoritesCard
                                            image={favoritePlaces[1].image}
                                            price={favoritePlaces[1].price}
                                            rating={favoritePlaces[1].rating}
                                            title={favoritePlaces[1].title}
                                            type={favoritePlaces[1].type}
                                            isPremium={favoritePlaces[1].isPremium}
                                            isBookmarked={favoritePlaces[1].isBookmarked}
                                        />
                                    </div>
                                </li>

                                <li className="favorites__locations-items">
                                    <div className="favorites__locations locations locations--current">
                                        <div className="locations__item">
                                            <a className="locations__item-link" href="#">
                                                <span>Cologne</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="favorites__places">
                                        <FavoritesCard
                                            image={favoritePlaces[2].image}
                                            price={favoritePlaces[2].price}
                                            rating={favoritePlaces[2].rating}
                                            title={favoritePlaces[2].title}
                                            type={favoritePlaces[2].type}
                                            isPremium={favoritePlaces[2].isPremium}
                                            isBookmarked={favoritePlaces[2].isBookmarked}
                                        />
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </div>
                </main>
                <footer className="footer container">
                    <a className="footer__logo-link" href="main.html">
                        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
                    </a>
                </footer>
            </div>
        </>
    )
}

export default Favorites;
