import axios from "axios";
import { IuserRegister } from "../interface/typeUsers";
import { IloginUser } from "../interface/typeUsers";

/* Post Register*/
export const postRegister = (
  formData: IuserRegister,
  postRegisterUserOk: any,
  postRegisterError: any
) => {
  axios
    .post("http://localhost:3001/users", formData)
    .then((response) => postRegisterUserOk(response))
    .catch((response) => postRegisterError(response));
};

/* Post Login */
export const postLogin = (
  formData: IloginUser,
  postLoginOk: any,
  postLoginError: any
) => {
  axios
    .post("http://localhost:3001/login", formData)
    .then((response) => postLoginOk(response))
    .catch((response) => postLoginError(response));
};
