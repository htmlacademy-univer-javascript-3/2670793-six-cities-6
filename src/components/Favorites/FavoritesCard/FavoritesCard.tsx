import { type FC } from 'react';
import { Link } from 'react-router-dom';

interface FavoritesCardProps {
    id: string;
    image: string;
    price: number;
    rating: number; // 0-5
    title: string;
    type: string;
    isPremium?: boolean;
    isBookmarked?: boolean;
}

const FavoritesCard: FC<FavoritesCardProps> = ({ id, image, price, rating, title, type, isPremium = false, isBookmarked = false }) => {
    const ratingPercentage = Math.round((rating / 5) * 100);

    return (
        <article className="favorites__card place-card">
            {isPremium && (
                <div className="place-card__mark">
                    <span>Premium</span>
                </div>
            )}
            <div className="favorites__image-wrapper place-card__image-wrapper">
                <img className="place-card__image" src={image} width="150" height="110" alt="Place image" />
            </div>
            <div className="favorites__card-info place-card__info">
                <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                        <b className="place-card__price-value">&euro;{price}</b>{' '}
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className={`place-card__bookmark-button button ${isBookmarked ? 'place-card__bookmark-button--active' : ''}`} type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                            <use xlinkHref="#icon-bookmark"></use>
                        </svg>
                        <span className="visually-hidden">{isBookmarked ? 'In bookmarks' : 'To bookmarks'}</span>
                    </button>
                </div>
                <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                        <span style={{ width: `${ratingPercentage}%` }}></span>
                        <span className="visually-hidden">Rating</span>
                    </div>
                </div>
                <h2 className="place-card__name">
                    <Link to={`/offer/${id}`}>{title}</Link>
                </h2>
                <p className="place-card__type">{type}</p>
            </div>
        </article>
    );
};

export default FavoritesCard;
