import { type FC } from 'react';
import PlaceCard from '../PlaceCard/PlaceCard';
import type { Offer } from '../../types/offer';

interface OffersListProps {
  offers: Offer[];
  onActiveCardChange?: (offerId: string | null) => void;
}

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

const getPlaceCardProps = (offer: Offer) => {
  const typeDisplayName = getTypeDisplayName(offer.type);

  return {
    id: offer.id,
    image: offer.previewImage,
    price: offer.price,
    rating: offer.rating,
    title: offer.title,
    type: typeDisplayName,
    isPremium: offer.isPremium,
    isBookmarked: offer.isFavorite,
  };
};

const OffersList: FC<OffersListProps> = ({ offers }) =>
// const [activeCardId, setActiveCardId] = useState<string | null>(null);

// const handleCardMouseEnter = (offerId: string) => {
//   setActiveCardId(offerId);
// };

// const handleCardMouseLeave = () => {
//   setActiveCardId(null);
// };

  (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          {...getPlaceCardProps(offer)}
          // onMouseEnter={() => handleCardMouseEnter(offer.id)}
          // onMouseLeave={handleCardMouseLeave}
        />
      ))}
    </div>
  );
export default OffersList;
