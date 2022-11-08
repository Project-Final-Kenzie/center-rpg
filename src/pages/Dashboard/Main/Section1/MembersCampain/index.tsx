import * as S from "./style.campainMembers";

const MembersCampain = () => {
  return (
    <S.CampainMembers>
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
      </div>
    </S.CampainMembers>
  );
};

export default MembersCampain;
