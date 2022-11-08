import MesterCard from "./MesterCard";
import CampainDetails from "./CampainDetails";
import { Button } from "../../../../components/Button/style.button";
import MembersCampain from "./MembersCampain";
import * as S from "./style.section1";

const Section1 = () => {
  return (
    <S.Section1>
      <MesterCard />
      <CampainDetails />
      <Button font="primary" type="submit">
        Ingressar nesta campanha
      </Button>
      <MembersCampain />
    </S.Section1>
  );
};

export default Section1;
