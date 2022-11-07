import { UserHistoriesContext } from "../../contexts/HistoriesContext";
import { IhistoriesData } from "../../interface/typeHistories";
import { useContext } from "react";
import { UserContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const { historiesData, loading } = UserHistoriesContext();
  const navigate = useNavigate();
  const { userState } = useContext(UserContext);

  useEffect(() => {
    !localStorage.getItem("@TOKEN") && navigate("/login");
  }, []);

  return (
    <>
      {!userState ? (
        <></>
      ) : (
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
        </>
      )}
    </>
  );
};

export default Home;
