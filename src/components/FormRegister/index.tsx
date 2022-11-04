import logo from "../../assets/img/logo.svg";
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
        <h2>CENTRAL RPG</h2>
      </S.SideOne>
      <S.SideTwo>
        <S.Form onSubmit={handleSubmit(onSubmitRegister)}>
          <h1>Cadastro</h1>
          <S.Div>
            <S.Image src={Logo} alt="" />
            <S.LinkStyled to="/login">Voltar</S.LinkStyled>
          </S.Div>

          <S.InputDiv>
            <label htmlFor="name">Nome</label>
            <StyledInput
              font="secondary"
              type="text"
              id="name"
              placeholder="Digite seu nome"
              {...register("name")}
            />
            <S.ErrorMessage>{errors.name?.message}</S.ErrorMessage>
          </S.InputDiv>

          <S.InputDiv>
            <label htmlFor="email">Email</label>
            <StyledInput
              font="secondary"
              type="email"
              id="email"
              placeholder="Digite seu email"
              {...register("email")}
            />
            <S.ErrorMessage>{errors.email?.message}</S.ErrorMessage>
          </S.InputDiv>

          <S.InputDiv>
            <label htmlFor="password">Senha</label>
            <StyledInput
              font="secondary"
              type="password"
              id="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>
          </S.InputDiv>

          <S.InputDiv>
            <label htmlFor="confirmPassword">Confirmação de senha</label>
            <StyledInput
              font="secondary"
              type="password"
              id="confirmPassword"
              placeholder="Confirme sua senha"
              {...register("confirmPassword")}
            />
            <S.ErrorMessage>{errors.confirmPassword?.message}</S.ErrorMessage>
          </S.InputDiv>

          <S.InputDiv>
            <label htmlFor="level">Selecione seu nível</label>
            <select id="level" {...register("level")}>
              <option value="iniciante">Iniciante</option>
              <option value="intermediario">Intermediário</option>
              <option value="avancado">Avançado</option>
            </select>
          </S.InputDiv>

          <Button font="secondary" type="submit">
            Entrar
          </Button>
        </S.Form>
      </S.SideTwo>
    </>
  );
};

export default FormRegister;
