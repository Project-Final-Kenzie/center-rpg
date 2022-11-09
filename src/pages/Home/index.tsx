import { StyledHeader } from "../../components/Header/styled.header";
import * as S from './styled.home'

import { UserHistoriesContext } from "../../contexts/HistoriesContext";
import { IhistoriesData } from "../../interface/typeHistories";

import logo from "../../assets/img/d20.svg";
import { Carousel } from "../../components/carousel";
import { Navigate} from "react-router-dom";

const Home = () => {
  const { historiesData } = UserHistoriesContext();
  const token = localStorage.getItem("@TOKEN")

  return (
    <>
      {token ? (
        <Navigate to='/dashboard'/>
      ):(
        <S.StyledContainer>
        <StyledHeader>
          <div>
            <img src={logo} alt="logotipo" />
              <S.LinkStyled to={"/login"}>Login</S.LinkStyled>
          </div>
        </StyledHeader>

        <Carousel />

        <ul>
          {historiesData?.map((h : IhistoriesData) => {
            return (
              <S.History key={`${h.id}`}>
                <img src={h.photo} alt={h.title} />

                <p>{h.title}</p>

                <div>
                  <span>{h.description}</span>
                </div>
                <S.LinkStyledRedirect to='/login'>Ver Mais</S.LinkStyledRedirect>
              </S.History>
            );
          })}
        </ul>
      </S.StyledContainer>
      )}
    </>
  );
};

export default Home;
