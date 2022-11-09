import { StyledHeader } from "../../components/Header/styled.header";
import { UserHistoriesContext } from "../../contexts/HistoriesContext";
import logo from "../../assets/img/logo.svg";
import * as S from "./style.dashboard";
import { Modal } from "../../components/Modal/modal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { setModalAddOpen, ModalAddOpen } = UserHistoriesContext();
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.clear();
    navigate("/home");
    toast.success("Seção encerrada");
  };

  let historiesData = [
    {
      id: 1,
      createdAt: "2021-03-31T15:46:05.000Z",
      updatedAt: "2021-03-31T15:46:05.000Z",
      owner: 1,
      title: "História 1",
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      photo:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      content: "Conteúdo da história 1",
      views: 0,
      comments: [],
      members: [],
      stars: 0,
    },
    {
      id: 2,
      createdAt: "2021-03-31T15:46:05.000Z",
      updatedAt: "2021-03-31T15:46:05.000Z",
      owner: 1,
      title: "História 1",
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      photo:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      content: "Conteúdo da história 1",
      views: 0,
      comments: [],
      members: [],
      stars: 0,
    },
    {
      id: 3,
      createdAt: "2021-03-31T15:46:05.000Z",
      updatedAt: "2021-03-31T15:46:05.000Z",
      owner: 1,
      title: "História 1",
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      photo:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      content: "Conteúdo da história 1",
      views: 0,
      comments: [],
      members: [],
      stars: 0,
    },
    {
      id: 4,
      createdAt: "2021-03-31T15:46:05.000Z",
      updatedAt: "2021-03-31T15:46:05.000Z",
      owner: 1,
      title: "História 1",
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      photo:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      content: "Conteúdo da história 1",
      views: 0,
      comments: [],
      members: [],
      stars: 0,
    },
    {
      id: 5,
      createdAt: "2021-03-31T15:46:05.000Z",
      updatedAt: "2021-03-31T15:46:05.000Z",
      owner: 1,
      title: "História 1",
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      photo:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      content: "Conteúdo da história 1",
      views: 0,
      comments: [],
      members: [],
      stars: 0,
    },
    {
      id: 6,
      createdAt: "2021-03-31T15:46:05.000Z",
      updatedAt: "2021-03-31T15:46:05.000Z",
      owner: 1,
      title: "História 1",
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      photo:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      content: "Conteúdo da história 1",
      views: 0,
      comments: [],
      members: [],
      stars: 0,
    },
  ];

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
          {historiesData?.map((h /*: IhistoriesData*/) => {
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
