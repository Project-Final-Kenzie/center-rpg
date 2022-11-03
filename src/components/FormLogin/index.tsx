import logo from "../../assets/img/logo.svg";
import { Button } from "../Button/style.button";
import { StyledInput } from "../Input/style.input";
import * as S from "./style.formLogin";

import { useContext } from "react";
import { UserContext } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IloginUser } from "../../interface/typeUsers";

const FormLogin = () => {
  const { loginFormAction } = useContext(UserContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório.").email("Email inválido"),
    password: yup.string().required("Senha obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IloginUser>({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <S.SideOne>
        <img src={logo} alt="" />
        <h2>CENTRAL RPG</h2>
      </S.SideOne>
      <S.SideTwo>
        <S.Form onSubmit={handleSubmit(loginFormAction)}>
          <h1>Faça o login</h1>
          <p>Faça seu login e se aventure</p>

          <label htmlFor="email">Email</label>
          <StyledInput
            font="primary"
            type="email"
            id="email"
            placeholder="Digite seu email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>

          <label htmlFor="password">Senha</label>
          <StyledInput
            font="primary"
            type="password"
            id="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>

          <Button font="primary" type="submit">
            Entrar
          </Button>

          <span>
            Não tem conta?
            <S.LinkStyled to={"/register"}>Registre-se</S.LinkStyled>
          </span>
        </S.Form>
      </S.SideTwo>
    </>
  );
};

export default FormLogin;
