import * as S from "./style.campainMembers";
import { Button3 } from "../../../../../components/Button/style.button";

const MembersCampain = () => {
  return (
    <S.CampainMembers>
      <Button3>Ingressar nesta campanha</Button3>
      <h2>MEMBROS DA CAMPANHA</h2>
      <div className="players">
        <div className="player">
          <p>Nome:</p>
          <p>Nível:</p>
        </div>
        <div className="player">
          <p>Nome:</p>
          <p>Nível:</p>
        </div>
        <div className="player">
          <p>Nome:</p>
          <p>Nível:</p>
        </div>
        <div className="player">
          <p>Nome:</p>
          <p>Nível:</p>
        </div>
        <div className="player">
          <p>Nome:</p>
          <p>Nível:</p>
        </div>
      </div>
    </S.CampainMembers>
  );
};

export default MembersCampain;
