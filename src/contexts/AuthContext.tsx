import { IauthProviderProps } from "../interface/typeUsers";
import { createContext, useState, useEffect } from "react";
import {
  IdataRegister,
  IdataLogin,
  IRegisterResponse,
  //IrequestError,
} from "../interface/typeUsers";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Api } from "../services/api";
//import { AxiosError } from "axios";

interface IuserContextProps {
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
}

export const UserContext = createContext({} as IuserContextProps);

export default function UserProvider({ children }: IauthProviderProps) {
  const [loading, setLoading] = useState(false);
  const [userState, setUserState] = useState(false);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  /*Redirect and mount*/

  useEffect(() => {
    //const userData = localStorage.getItem("@TOKEN");
    //getLoginData(userData);
  }, []);

  /* Register */

  const onSubmitRegister = async (dataRegister: IdataRegister) => {
    try {
      const { data } = await Api.post<IRegisterResponse>(
        "/users",
        dataRegister
      );
      const notifySucess = (message: string) => toast.success(message);
      notifySucess("Foi cadastrado com sucesso!");
      setLoading(false);
      localStorage.setItem("@TOKEN", data.accessToken);
      localStorage.setItem("@USERID", data.user.id);
      const userData = JSON.stringify(data.user);
      localStorage.setItem("@USERINFO", userData);
      navigate("/home");
    } catch (error: any) {
      const notifyError = (message: string) => toast.error(message);
      const err: string = error.response?.data;
      if (err === "Email already exists") {
        notifyError("Este email já está registrado!");
        navigate("/register");
        return;
      }
      notifyError("Não foi possível cadastrar!");
      setLoading(false);
    }
  };

  /* Login */

  const onSubmitLogin = async (dataLogin: IdataLogin) => {
    try {
      const { data } = await Api.post<IRegisterResponse>("/login", dataLogin);
      const notifySucess = (message: string) => toast.success(message);
      setUserData(data.user);
      if (data.user) {
        setLoading(false);
        localStorage.setItem("@TOKEN", data.accessToken);
        localStorage.setItem("@USERID", data.user.id);
        const userData = JSON.stringify(data.user);
        localStorage.setItem("@USERINFO", userData);

        notifySucess("Login bem sucedido!");
        navigate("/home");
      }
    } catch (error) {
      const notifyError = (message: string) => toast.error(message);

      setLoading(false);
      notifyError("Senha ou e-mail inválidos!");
    }
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        onSubmitRegister,
        onSubmitLogin,
        userState,
        setUserState,
        userData,
        setUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
