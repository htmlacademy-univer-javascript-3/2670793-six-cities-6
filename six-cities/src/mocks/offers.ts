export interface Offer {
  id: string;
  title: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  price: number;
  rating: number;
  image: string;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  bedrooms: number;
  maxAdults: number;
  description: string;
  goods: string[];
  host: {
    id: number;
    name: string;
    isPro: boolean;
    avatarUrl: string;
  };
  images: string[];
}

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    rating: 4.8,
    image: '/img/apartment-01.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    bedrooms: 3,
    maxAdults: 4,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      id: 1,
      name: 'Angelina',
      isPro: true,
      avatarUrl: '/img/avatar-angelina.jpg',
    },
    images: ['/img/apartment-01.jpg', '/img/studio-01.jpg', '/img/apartment-02.jpg'],
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    rating: 4.2,
    image: '/img/room.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    bedrooms: 1,
    maxAdults: 2,
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Cable TV', 'Fridge'],
    host: {
      id: 2,
      name: 'Max',
      isPro: false,
      avatarUrl: '/img/avatar-max.jpg',
    },
    images: ['/img/room.jpg', '/img/room-small.jpg'],
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    rating: 4.9,
    image: '/img/apartment-02.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    bedrooms: 2,
    maxAdults: 3,
    description: 'Peaceful studio in the heart of Amsterdam with canal views. Perfect for a romantic getaway or business trip.',
    goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Kitchen', 'Dishwasher', 'Cable TV', 'Fridge', 'Air conditioning'],
    host: {
      id: 3,
      name: 'Sophie',
      isPro: true,
      avatarUrl: '/img/avatar-angelina.jpg',
    },
    images: ['/img/apartment-02.jpg', '/img/apartment-03.jpg', '/img/studio-photos.jpg'],
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    rating: 5.0,
    image: '/img/apartment-03.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    bedrooms: 4,
    maxAdults: 6,
    description: 'This spacious apartment features a large bedroom with a king-size bed, modern amenities, and is located in a quiet neighborhood yet close to the city center.',
    goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cable TV', 'Fridge', 'Air conditioning', 'Breakfast'],
    host: {
      id: 4,
      name: 'Marcus',
      isPro: true,
      avatarUrl: '/img/avatar-max.jpg',
    },
    images: ['/img/apartment-03.jpg', '/img/apartment-small-03.jpg', '/img/apartment-small-04.jpg'],
  },
];
