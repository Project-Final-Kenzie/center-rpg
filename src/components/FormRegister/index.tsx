import logo from "../../assets/img/logo.svg";
import d20 from "../../assets/img/d20.svg";

import { Button } from "../Button/style.button";
import { StyledInput } from "../Input/style.input";
import * as S from "./style.formRegister";
import Logo from "../../assets/img/logo.svg";

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../contexts/AuthContext";
import { IdataRegister } from "../../interface/typeUsers";
import { formSchema } from "../../validations/registerUser";

const FormRegister = () => {
  const { onSubmitRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IdataRegister>({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <S.SideOne>
        <img src={logo} alt="" />
      </S.SideOne>
      <S.SideTwo>
        <h1>Cadastro</h1>
        <S.Div>
          {/* <S.Image src={d20} alt='' /> */}
          <S.LinkStyled to="/login">Voltar</S.LinkStyled>
        </S.Div>
        <S.Form onSubmit={handleSubmit(onSubmitRegister)}>
          <label htmlFor="name">
            Nome
            <StyledInput
              font="secondary"
              type="text"
              id="name"
              placeholder="Digite seu nome"
              {...register("name")}
            />
            <div>
              <span>{errors.name?.message}</span>
            </div>
          </label>

          <label htmlFor="email">
            Email
            <StyledInput
              font="secondary"
              type="email"
              id="email"
              placeholder="Digite seu email"
              {...register("email")}
            />
            <div>
              <span>{errors.email?.message}</span>
            </div>
          </label>

          <label htmlFor="password">
            Senha
            <StyledInput
              font="secondary"
              type="password"
              id="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            <div>
              <span>{errors.password?.message}</span>
            </div>
          </label>

          <label htmlFor="confirmPassword">
            Confirmação de senha
            <StyledInput
              font="secondary"
              type="password"
              id="confirmPassword"
              placeholder="Confirme sua senha"
              {...register("confirmPassword")}
            />
            <div>
              <span>{errors.confirmPassword?.message}</span>
            </div>
          </label>

          <label htmlFor="confirmPassword">
            Selecione seu nível
            <select {...register("level")}>
              <option value="iniciante">Iniciante</option>
              <option value="intermediario">Intermediário</option>
              <option value="avancado">Avançado</option>
            </select>
            <div>
              <span>teste</span>
            </div>
          </label>

          <Button font="secondary" type="submit">
            Entrar
          </Button>
        </S.Form>
      </S.SideTwo>
    </>
  );
};

export default FormRegister;
