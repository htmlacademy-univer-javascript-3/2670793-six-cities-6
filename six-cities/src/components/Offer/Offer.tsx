import { type FC } from 'react';
import PlaceCard from '../PlaceCard/PlaceCard';
import Sprite from '../Sprite/Sprite';
import ReviewForm from '../ReviewForm/ReviewForm';
import { Link, useParams } from 'react-router-dom';
import type { Offer } from '../../mocks/offers';

interface OfferProps {
    offers: Offer[];
}

const OfferComponent: FC<OfferProps> = ({ offers }) => {
    const { id } = useParams<{ id: string }>();
    const currentOffer = offers.find(offer => offer.id === id);

    if (!currentOffer) {
        return <div>Offer not found</div>;
    }

    const nearPlaces = offers.filter(offer => offer.id !== currentOffer.id);

    return (
        <>
            <Sprite />

            <div className="page">
                <header className="header">
                    <div className="container">
                        <div className="header__wrapper">
                            <div className="header__left">
                                <Link className="header__logo-link" to="/">
                                    <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
                                </Link>
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

                <main className="page__main page__main--property">
                    <section className="property">
                        <div className="property__gallery-container container">
                            <div className="property__gallery">
                                {currentOffer.images.map((image, index) => (
                                    <div key={index} className="property__image-wrapper">
                                        <img className="property__image" src={image} alt={`Photo ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="property__container container">
                            <div className="property__wrapper">
                                {currentOffer.isPremium && (
                                    <div className="property__mark">
                                        <span>Premium</span>
                                    </div>
                                )}
                                <div className="property__name-wrapper">
                                    <h1 className="property__name">
                                        {currentOffer.title}
                                    </h1>
                                    <button className={`property__bookmark-button button ${currentOffer.isFavorite ? 'property__bookmark-button--active' : ''}`} type="button">
                                        <svg className="property__bookmark-icon" width="31" height="33">
                                            <use xlinkHref="#icon-bookmark"></use>
                                        </svg>
                                        <span className="visually-hidden">{currentOffer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
                                    </button>
                                </div>
                                <div className="property__rating rating">
                                    <div className="property__stars rating__stars">
                                        <span style={{ width: `${Math.round((currentOffer.rating / 5) * 100)}%` }}></span>
                                        <span className="visually-hidden">Rating</span>
                                    </div>
                                    <span className="property__rating-value rating__value">{currentOffer.rating}</span>
                                </div>
                                <ul className="property__features">
                                    <li className="property__feature property__feature--entire">
                                        {currentOffer.type === 'apartment' ? 'Apartment' :
                                         currentOffer.type === 'room' ? 'Private room' :
                                         currentOffer.type === 'house' ? 'House' : 'Hotel'}
                                    </li>
                                    <li className="property__feature property__feature--bedrooms">
                                        {currentOffer.bedrooms} Bedrooms
                                    </li>
                                    <li className="property__feature property__feature--adults">
                                        Max {currentOffer.maxAdults} adults
                                    </li>
                                </ul>
                                <div className="property__price">
                                    <b className="property__price-value">&euro;{currentOffer.price}</b>
                                    <span className="property__price-text">  night</span>
                                </div>
                                <div className="property__inside">
                                    <h2 className="property__inside-title">What&apos;s inside</h2>
                                    <ul className="property__inside-list">
                                        {currentOffer.goods.map((good, index) => (
                                            <li key={index} className="property__inside-item">
                                                {good}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="property__host">
                                    <h2 className="property__host-title">Meet the host</h2>
                                    <div className="property__host-user user">
                                        <div className={`property__avatar-wrapper ${currentOffer.host.isPro ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                                            <img className="property__avatar user__avatar" src={currentOffer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                                        </div>
                                        <span className="property__user-name">
                                            {currentOffer.host.name}
                                        </span>
                                        {currentOffer.host.isPro && (
                                            <span className="property__user-status">
                                                Pro
                                            </span>
                                        )}
                                    </div>
                                    <div className="property__description">
                                        <p className="property__text">
                                            {currentOffer.description}
                                        </p>
                                    </div>
                                </div>
                                <section className="property__reviews reviews">
                                    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                                    <ul className="reviews__list">
                                        <li className="reviews__item">
                                            <div className="reviews__user user">
                                                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                                                    <img className="reviews__avatar user__avatar" src="/img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
                                                </div>
                                                <span className="reviews__user-name">
                                                    Max
                                                </span>
                                            </div>
                                            <div className="reviews__info">
                                                <div className="reviews__rating rating">
                                                    <div className="reviews__stars rating__stars">
                                                        <span style={{ width: '80%' }}></span>
                                                        <span className="visually-hidden">Rating</span>
                                                    </div>
                                                </div>
                                                <p className="reviews__text">
                                                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                                                </p>
                                                <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
                                            </div>
                                        </li>
                                    </ul>
                                    <ReviewForm />
                                </section>
                            </div>
                        </div>
                        <section className="property__map map"></section>
                    </section>
                    <div className="container">
                        <section className="near-places places">
                            <h2 className="near-places__title">Other places in the neighbourhood</h2>
                            <div className="near-places__list places__list">
                                {nearPlaces.map((offer) => {
                                    const typeDisplayName = offer.type === 'apartment' ? 'Apartment' :
                                                           offer.type === 'room' ? 'Private room' :
                                                           offer.type === 'house' ? 'House' : 'Hotel';
                                    return (
                                        <PlaceCard
                                            key={offer.id}
                                            id={offer.id}
                                            image={offer.image}
                                            price={offer.price}
                                            rating={offer.rating}
                                            title={offer.title}
                                            type={typeDisplayName}
                                            isPremium={offer.isPremium}
                                            isBookmarked={offer.isFavorite}
                                        />
                                    );
                                })}
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </>
    )
}

export default OfferComponent;
