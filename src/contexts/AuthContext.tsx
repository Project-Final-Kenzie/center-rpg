import { IauthProviderProps } from "../interface/typeUsers";
import { createContext, useState, useEffect } from "react";
import { IuserRegister, IloginUser } from "../interface/typeUsers";
import { postRegister, postLogin } from "../services/authRequests";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IuserContextProps {
  /*Register*/
  registerFormAction: (register: IuserRegister) => void;

  /*Login*/
  loginFormAction: (formData: IloginUser) => void;
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

  function registerFormAction(data: IuserRegister) {
    delete data.confirmPassword;
    console.log(data);

    postRegister(data, postRegisterUserOk, postRegisterError);
    function postRegisterUserOk(response: any) {
      const notifySucess = (message: string) => toast.success(message);
      notifySucess("Foi cadastrado com sucesso!");
      navigate("/login");
    }
    function postRegisterError(response: any) {
      const notifyError = (message: string) => toast.error(message);
      notifyError("Não foi possível cadastrar!");
      return;
    }
  }

  /* Login */

  function loginFormAction(data: IloginUser) {
    setLoading(true);
    postLogin(data, postLoginOk, postLoginError);

    function postLoginOk(response: any) {
      const notifySucess = (message: string) => toast.success(message);
      setUserData(response.data.user);
      response.data.user.name && callLoginPage();
      function callLoginPage() {
        setLoading(false);
        localStorage.setItem("@TOKEN", response.data.accessToken);
        localStorage.setItem("@USERID", response.data.user.id);
        const userData = JSON.stringify(response.data.user);
        localStorage.setItem("@USERINFO", userData);

        notifySucess("Login bem sucedido!");
        navigate("/home");
      }
    }
    function postLoginError(response: any) {
      console.log(response);
      const notifyError = (message: string) => toast.error(message);
      setLoading(false);
      notifyError("Senha ou e-mail inválidos!");
      return;
    }
  }

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        registerFormAction,
        loginFormAction,
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
