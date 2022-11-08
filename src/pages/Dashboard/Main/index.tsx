import Section1 from "./Section1";
import Section2 from "./Section2";
import * as S from "./style.main";

const DashboardMain = () => {
  return (
    <S.Main>
      <S.CampainTitle>
        <h2 className="campain">SEJA BEM VINDO A CAMPANHA</h2>
        <h2 className="campainTitle">NOME DA CAMPANHA!</h2>
      </S.CampainTitle>
      <div className="sections">
        <Section1 />
        <Section2 />
      </div>
    </S.Main>
  );
};

export default DashboardMain;
