import { StyledHeader } from "../../components/Header/styled.header";
import * as S from "./styled.home";

import { UserHistoriesContext } from "../../contexts/HistoriesContext";
import { IhistoriesData } from "../../interface/typeHistories";
import logo from "../../assets/img/d20.svg";
import { Carousel } from "../../components/carousel";

import { Navigate} from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/AuthContext";

const Home = () => {
  const { historiesData } = UserHistoriesContext();
  const { user } = useContext(UserContext);

  return (
    <>
    {user ? (
      <Navigate to='/dashboard'/>
    ):(
      <>
      <StyledHeader>
        <div>
          <img src={logo} alt="logotipo" />
          <S.LinkStyled to={"/login"}>Login</S.LinkStyled>
        </div>
      </StyledHeader>
      {
        <S.StyledContainer>
          <Carousel />

          <ul>
            {historiesData?.map((h: IhistoriesData, index) => {
              if (index > 3) return null;
              return (
                <S.History key={`${h.id}`}>
                  <img src={h.photo} alt={h.title} />

                  <p>{h.title}</p>

                  <div>
                    <span>{h.description}</span>
                  </div>
                  <S.LinkStyledRedirect to="/login">
                    Ver Mais
                  </S.LinkStyledRedirect>
                </S.History>
              );
            })}
          </ul>
        </S.StyledContainer>
      }
    </>
  )}
  </>
  );

};

export default Home;
