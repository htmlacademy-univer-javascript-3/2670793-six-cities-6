export interface Offer {
  id: string;
  title: string;
  type: string;
  price: number;
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
  rating: number;
  previewImage: string;
  //Опциональные
  bedrooms?: number;
  maxAdults?: number;
  description?: string;
  goods?: string[];
  host?: {
    id: number;
    name: string;
    isPro: boolean;
    avatarUrl: string;
  };
  images?: string[];
}
