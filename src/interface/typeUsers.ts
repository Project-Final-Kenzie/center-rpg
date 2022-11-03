export interface IauthProviderProps {
  children: React.ReactNode;
}

export interface IuserRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  level: string;
}

export interface IloginUser {
  email: string;
  password: string;
}

/* export interface IuserData {
  email: string;
  password: string;
  name: string;
  level: string;
  id: number;
  age?: number;
  createdAt?: string;
  updatedAt?: string;
  photo?: string;
  bio?: string;
  city?: string;
  state?: string;
  country?: string;
  phone?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  youtube?: string;
  twitch?: string;
  linkedin?: string;
  website?: string;
  discord?: string;
  teamspeak?: string;
  skype?: string;
  whatsapp?: string;
} */
