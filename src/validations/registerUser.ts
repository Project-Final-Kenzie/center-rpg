import * as yup from "yup";

export const formSchema = yup.object().shape({
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
  level: yup
  .string()
  .required("Campo obrigatório"),
});
