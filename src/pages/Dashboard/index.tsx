import { StyledHeader } from "../../components/Header/styled.header";
import { UserHistoriesContext } from "../../contexts/HistoriesContext";
import logo from "../../assets/img/logo.svg";
import * as S from "./style.dashboard";
import { Modal } from "../../components/Modal/modal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IhistoriesData } from "../../interface/typeHistories";

const Dashboard = () => {
  const { setModalAddOpen, ModalAddOpen } = UserHistoriesContext();
  const { historiesData } = UserHistoriesContext();
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.clear();
    navigate("/home");
    toast.success("Seção encerrada");
  };

  return (
    <>
      <S.StyledContainer>
        {ModalAddOpen && <Modal />}
        <StyledHeader>
          <div>
            <img src={logo} alt="logotipo" />
            <S.Logout onClick={logout}>Logout</S.Logout>
          </div>
        </StyledHeader>
        <S.CreateCamp
          onClick={() => {
            setModalAddOpen(true);
          }}
        >
          Criar Campanha
        </S.CreateCamp>
        <ul>
          {historiesData?.map((h : IhistoriesData) => {
            return (
              <S.History key={`${h.id}`}>
                <img src={h.photo} alt={h.title} />

                <p>{h.title}</p>

                <div>
                  <span>{h.description}</span>
                </div>
                <button>Ver Mais</button>
              </S.History>
            );
          })}
        </ul>
      </S.StyledContainer>
    </>
  );
};

export default Dashboard;
