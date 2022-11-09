import {
  IauthProviderProps,
  iResponseLogin,
  iUser,
  IuserContextProps,
  IdataRegister,
  IdataLogin,
  IRegisterResponse,
} from "../interface/typeUsers";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Api } from "../services/api";

export const UserContext = createContext({} as IuserContextProps);

export default function UserProvider({ children }: IauthProviderProps) {
  const [loading, setLoading] = useState(false);
  const [userState, setUserState] = useState(false);
  const [userData, setUserData] = useState({});
  const [user, setUser] = useState<iUser | null>(null);
  const navigate = useNavigate();

  /*Redirect and mount*/

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@TOKEN");
      const id = localStorage.getItem("@USERID");

      if (token) {
        try {
          Api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await Api.get(`/users/${id}`);
          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  /* Register */

  const onSubmitRegister = async (dataRegister: IdataRegister) => {
    setLoading(true);
    delete dataRegister.confirmPassword;
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
      let err: string = "";
      if (error.response.data) {
        err = error.response.data;
      } else {
        err = "Não foi possível cadastrar!";
      }
      if (err === "Email already exists") {
        err = "Este email já está registrado!";
      }
      notifyError(err);
      setLoading(false);
    }
  };

  /* Login */
  const onSubmitLogin = async (dataLogin: IdataLogin) => {
    try {
      const { data } = await Api.post<iResponseLogin>("/login", dataLogin);

      Api.defaults.headers.authorization = `Bearer ${data.accessToken}`;

      window.localStorage.setItem("@TOKEN", data.accessToken);
      window.localStorage.setItem("@USERID", data.user.id);

      if (data.accessToken) {
        toast.success("Login realizado com sucesso");
      }
      setUser(data.user);

      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.log(error);

      toast.error("Email e/ou Senha invalidos");
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
        setUser,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
