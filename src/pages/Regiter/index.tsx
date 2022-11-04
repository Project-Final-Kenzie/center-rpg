import FormRegister from "../../components/FormRegister";
import * as S from "./style.register";
import { useContext } from "react";
import { UserContext } from "../../contexts/AuthContext";
import Loading from "../../components/Loading";

const Register = () => {
  const { loading } = useContext(UserContext);
  return (
    <>
      <S.Container>{loading ? <Loading /> : <FormRegister />}</S.Container>
    </>
  );
};

export default Register;
