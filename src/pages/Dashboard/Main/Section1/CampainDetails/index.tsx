import * as S from "./style.campainDetails";

const CampainDetails = () => {
  return (
    <S.CampainDetails>
      <div>
        <span>Duração da campanha:</span>
        <span className="property">Rápida</span>
      </div>
      <div>
        <span>Ambientação:</span>
        <span className="property">Medieval</span>
      </div>
      <div>
        <span>Discord da campanha:</span>
        <span>Clique aqui</span>
      </div>
    </S.CampainDetails>
  );
};

export default CampainDetails;
