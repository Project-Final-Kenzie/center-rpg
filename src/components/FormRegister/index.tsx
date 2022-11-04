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

          <label htmlFor="name">Nome</label>
          <StyledInput
            font="secondary"
            type="text"
            id="name"
            placeholder="Digite seu nome"
            {...register("name")}
          />
          <span>{errors.name?.message}</span>

          <label htmlFor="email">Email</label>
          <StyledInput
            font="secondary"
            type="email"
            id="email"
            placeholder="Digite seu email"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>

          <label htmlFor="password">Senha</label>
          <StyledInput
            font="secondary"
            type="password"
            id="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>

          <label htmlFor="confirmPassword">Confirmação de senha</label>
          <StyledInput
            font="secondary"
            type="password"
            id="confirmPassword"
            placeholder="Confirme sua senha"
            {...register("confirmPassword")}
          />
          <span>{errors.confirmPassword?.message}</span>

          <label htmlFor="level">Selecione seu nível</label>
          <select id="level" {...register("level")}>
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediário</option>
            <option value="avancado">Avançado</option>
          </select>

          <Button font="secondary" type="submit">
            Entrar
          </Button>
        </S.Form>
      </S.SideTwo>
    </>
  );
};

export default FormRegister;
