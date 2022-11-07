import { useContext } from "react";
import { UserContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = () => {
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
            <img src="" alt="" /> <span>Voltar</span>
          </header>
          <main>
            <div>
              <img src="" alt="" />{" "}
              <div>
                <h2>Dados do Mestre</h2>
                <div>
                  <p>Nome: José</p>
                  <p>Email: jose@gmail.com</p>
                  <p>Discord: soje12344</p>
                </div>
              </div>
            </div>
            <div>
              <p>Duração da campanha:</p>
              <p>Rápida</p>
              <p>Ambientação</p>
              <p>Medieval</p>
              <p>Discord da campanha</p>
              <p>Clique aqui</p>
            </div>
            <span>Ingressar nesta campanha</span>
            <div></div>
          </main>
          <footer>
            <img src="" alt="" />{" "}
            <div>
              <span>Redes Sociais</span>
            </div>{" "}
            <div>
              <span>Desenvolvedores</span>
            </div>
          </footer>
        </>
      )}
    </>
  );
};

export default Dashboard;
