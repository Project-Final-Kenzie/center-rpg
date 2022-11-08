import * as S from "./style.mesterCard";
import pessoa from "../../../../../assets/img/pessoa1.jpg";

const MesterCard = () => {
  return (
    <S.MesterCard>
      <img src={pessoa} alt="" />
      <div>
        <h3>Dados do Mestre</h3>
        <div>
          <p>Nome: José</p>
          <p>Email: jose@gmail.com</p>
          <p>Discord: soje12344</p>
        </div>
      </div>
    </S.MesterCard>
  );
};

export default MesterCard;
