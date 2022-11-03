export interface IauthProviderProps {
  children: React.ReactNode;
}

export interface IdataRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  level: string;
}

export interface IdataLogin {
  email: string;
  password: string;
}

interface IuserRegisterResponse {
  email: string;
  id: string;
  level: string;
  name: string;
}

export interface IRegisterResponse {
  accessToken: string;
  user: IuserRegisterResponse;
}

export interface IrequestError {
  response: {
    data: string;
  };
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
