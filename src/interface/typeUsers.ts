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

export interface iResponseLogin {
  accessToken: string;
  user: {
    email: string;
    name: string;
    age: number;
    id: string;
    createdAt: string;
    updatedAt: string;
    level: string;
    photo: string | null;
    bio: string;
    city: string;
    state: string;
    country: string;
    phone: string;
    instagran: string;
    facebook: string;
    twitter: string;
    youtube: string;
    twitch: string;
    linkedin: string;
    website: string;
    discord: string;
    teamspeak: string;
    skype: string;
    whatsapp: string;
  };

  email: string;
  password: string;
}
export interface iUser {
  email?: string;
  name?: string;
  age?: number;
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  level?: string;
  photo?: string | null;
  bio?: string;
  city?: string;
  state?: string;
  country?: string;
  phone?: string;
  instagran?: string;
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
}
export interface IuserContextProps {
  /*Register*/
  onSubmitRegister: (dataRegister: IdataRegister) => Promise<void>;

  /*Login*/
  onSubmitLogin: (dataLogin: IdataLogin) => Promise<void>;
  userState: boolean;
  setUserState: React.Dispatch<React.SetStateAction<boolean>>;

  /* Globals */
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  userData: {};
  setUserData: React.Dispatch<React.SetStateAction<{}>>;

  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  user: iUser | null;
}

export interface IOwner {
  id: string | undefined;
  name: string | undefined;
  email: string | undefined;
}