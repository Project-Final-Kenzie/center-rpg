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
