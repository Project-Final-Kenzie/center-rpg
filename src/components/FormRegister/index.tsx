import logo from "../../assets/img/logo.svg";
import { Button } from "../Button/style.button";
import { StyledInput } from "../Input/style.input";
import * as S from "./style.formRegister";
import Logo from "../../assets/img/logo.svg";

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../contexts/AuthContext";
import * as yup from "yup";
import { IuserRegister } from "../../interface/typeUsers";

const FormRegister = () => {
  const { registerFormAction } = useContext(UserContext);
  const formSchema = yup.object().shape({
    name: yup.string().required("Coloque seu nome"),
    email: yup
      .string()
      .required("Preencha o campo de e-mail")
      .email("Email tem que ser válido"),
    password: yup
      .string()
      .required("Preencha com a senha")
      .matches(/[a-zA-Z]/, "A senha deve conter ao menos uma letra")
      .matches(/(\d)/, "A senha deve conter ao menos um número")
      .matches(/(\W)|_/, "A senha deve conter um caracter especial")
      .matches(/.{8,}/, "A senha deve ter no mínimo 8 caracteres"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senha incorreta")
      .required("Confirme sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IuserRegister>({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <S.SideOne>
        <img src={logo} alt="" />
        <h2>CENTRAL RPG</h2>
      </S.SideOne>
      <S.SideTwo>
        <S.Form onSubmit={handleSubmit(registerFormAction)}>
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
          <p>{errors.name?.message}</p>

          <label htmlFor="email">Email</label>
          <StyledInput
            font="secondary"
            type="email"
            id="email"
            placeholder="Digite seu email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>

          <label htmlFor="password">Senha</label>
          <StyledInput
            font="secondary"
            type="password"
            id="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>

          <label htmlFor="confirmPassword">Confirmação de senha</label>
          <StyledInput
            font="secondary"
            type="password"
            id="confirmPassword"
            placeholder="Confirme sua senha"
            {...register("confirmPassword")}
          />
          <p>{errors.confirmPassword?.message}</p>

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
