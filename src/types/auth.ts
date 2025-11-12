export interface AuthInfo {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}

export interface User {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
}

export interface LoginData {
  email: string;
  password: string;
}
