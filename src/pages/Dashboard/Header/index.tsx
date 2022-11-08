import logo from "../../../assets/img/d20.svg";
import * as S from "./style.header";
import { Button2 } from "../../../components/Button/style.button";

const DashboardHeader = () => {
  return (
    <S.Header>
      <img src={logo} alt="" /> <Button2>Voltar</Button2>
    </S.Header>
  );
};

export default DashboardHeader;
