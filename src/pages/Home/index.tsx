import { UserHistoriesContext } from "../../contexts/HistoriesContext";
import { IhistoriesData } from "../../interface/typeHistories";

const Home = () => {
  const { historiesData, loading } = UserHistoriesContext();

  return (
    <>
      <header>
        <img src="" alt="logotipo" />
        <button>Login</button>
      </header>
      <div>
        <ul>
          {historiesData?.map((historie: IhistoriesData) => {
            return (
              <li key={`${historie.id}`}>
                <img src={historie.photo} alt={historie.title} />
                <div>
                  <p>{historie.title}</p>
                  <p>{historie.description}</p>
                  <button>Ver Mais</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
=======

import { StyledHeader } from "../../components/Header/styled.header";
import {
  History,
  LinkStyled,
  StyledContainer,
  StyledSlide,
} from "./styled.home";

//import { UserHistoriesContext } from "../../contexts/HistoriesContext";
//import { IhistoriesData } from "../../interface/typeHistories";

import logo from "../../assets/img/Logoex.svg";
import {
  StyledDevelopes,
  StyledFooter,
  StyledLogo,
  StyledSocial,
} from "../../components/Footer/styled.footer";

const Home = () => {
  //const { historiesData, loading } = UserHistoriesContext();

  /*if (!loading) {
    return <p>Carregando...</p>;
  }
  Comentado para poder estilizar o retorno abaixo
  */

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
  ];

  return (
    <>
      <StyledContainer>
        <StyledHeader>
          <img src={logo} alt="logotipo" />
          <LinkStyled to={"/login"}>Login</LinkStyled>
        </StyledHeader>

        <StyledSlide></StyledSlide>
        <ul>
          {historiesData?.map((h /*: IhistoriesData*/) => {
            return (
              <History key={`${h.id}`}>
                <img src={h.photo} alt={h.title} />

                <p>{h.title}</p>

                <div>
                  <span>{h.description}</span>
                </div>
                <button>Ver Mais</button>
              </History>
            );
          })}
        </ul>
      </StyledContainer>
      <StyledFooter>
        <StyledLogo>
          <img src={logo} alt="logotipo" />
          <span>Central RPG</span>
        </StyledLogo>

        <StyledSocial>
          <span>Rede sociais</span>
          <ul>
            <li>
              <img
                src="https://st.depositphotos.com/1144386/4493/v/600/depositphotos_44935873-stock-illustration-original-web-instagram-icon.jpg"
                alt="logotipo"
              />

              <img
                src="https://st.depositphotos.com/1144386/4493/v/600/depositphotos_44935873-stock-illustration-original-web-instagram-icon.jpg"
                alt="logotipo"
              />
              <img
                src="https://st.depositphotos.com/1144386/4493/v/600/depositphotos_44935873-stock-illustration-original-web-instagram-icon.jpg"
                alt="logotipo"
              />
              <span>Silas Marques</span>
            </li>

            <li>
              <img
                src="https://st.depositphotos.com/1144386/4493/v/600/depositphotos_44935873-stock-illustration-original-web-instagram-icon.jpg"
                alt="logotipo"
              />

              <img
                src="https://st.depositphotos.com/1144386/4493/v/600/depositphotos_44935873-stock-illustration-original-web-instagram-icon.jpg"
                alt="logotipo"
              />
              <img
                src="https://st.depositphotos.com/1144386/4493/v/600/depositphotos_44935873-stock-illustration-original-web-instagram-icon.jpg"
                alt="logotipo"
              />
              <span>Silas Marques</span>
            </li>

            <li>
              <img
                src="https://st.depositphotos.com/1144386/4493/v/600/depositphotos_44935873-stock-illustration-original-web-instagram-icon.jpg"
                alt="logotipo"
              />

              <img
                src="https://st.depositphotos.com/1144386/4493/v/600/depositphotos_44935873-stock-illustration-original-web-instagram-icon.jpg"
                alt="logotipo"
              />
              <img
                src="https://st.depositphotos.com/1144386/4493/v/600/depositphotos_44935873-stock-illustration-original-web-instagram-icon.jpg"
                alt="logotipo"
              />
              <span>Silas Marques</span>
            </li>

            <li>
              <img
                src="https://st.depositphotos.com/1144386/4493/v/600/depositphotos_44935873-stock-illustration-original-web-instagram-icon.jpg"
                alt="logotipo"
              />

              <img
                src="https://st.depositphotos.com/1144386/4493/v/600/depositphotos_44935873-stock-illustration-original-web-instagram-icon.jpg"
                alt="logotipo"
              />
              <img
                src="https://st.depositphotos.com/1144386/4493/v/600/depositphotos_44935873-stock-illustration-original-web-instagram-icon.jpg"
                alt="logotipo"
              />
              <span>Silas Marques</span>
            </li>

            <li>
              <img
                src="https://st.depositphotos.com/1144386/4493/v/600/depositphotos_44935873-stock-illustration-original-web-instagram-icon.jpg"
                alt="logotipo"
              />

              <img
                src="https://st.depositphotos.com/1144386/4493/v/600/depositphotos_44935873-stock-illustration-original-web-instagram-icon.jpg"
                alt="logotipo"
              />
              <img
                src="https://st.depositphotos.com/1144386/4493/v/600/depositphotos_44935873-stock-illustration-original-web-instagram-icon.jpg"
                alt="logotipo"
              />
              <span>Silas Marques</span>
            </li>

            <li>
              <img
                src="https://st.depositphotos.com/1144386/4493/v/600/depositphotos_44935873-stock-illustration-original-web-instagram-icon.jpg"
                alt="logotipo"
              />

              <img
                src="https://st.depositphotos.com/1144386/4493/v/600/depositphotos_44935873-stock-illustration-original-web-instagram-icon.jpg"
                alt="logotipo"
              />
              <img
                src="https://st.depositphotos.com/1144386/4493/v/600/depositphotos_44935873-stock-illustration-original-web-instagram-icon.jpg"
                alt="logotipo"
              />
              <span>Silas Marques</span>
            </li>
          </ul>
        </StyledSocial>

        <StyledDevelopes>
          <span>Desenvolvedores:</span>
          <div>
            <img
              src="https://img.freepik.com/vetores-premium/homem-perfil-caricatura_18591-58482.jpg?w=2000"
              alt="dev"
            />
            <img
              src="https://img.freepik.com/vetores-premium/homem-perfil-caricatura_18591-58482.jpg?w=2000"
              alt="dev"
            />
            <img
              src="https://img.freepik.com/vetores-premium/homem-perfil-caricatura_18591-58482.jpg?w=2000"
              alt="dev"
            />
            <img
              src="https://img.freepik.com/vetores-premium/homem-perfil-caricatura_18591-58482.jpg?w=2000"
              alt="dev"
            />
            <img
              src="https://img.freepik.com/vetores-premium/homem-perfil-caricatura_18591-58482.jpg?w=2000"
              alt="dev"
            />
            <img
              src="https://img.freepik.com/vetores-premium/homem-perfil-caricatura_18591-58482.jpg?w=2000"
              alt="dev"
            />
          </div>
        </StyledDevelopes>
      </StyledFooter>