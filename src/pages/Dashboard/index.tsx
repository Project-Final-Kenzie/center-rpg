import { useContext } from "react";
import { UserContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DashboardMain from "./Main";
import DashboardHeader from "./Header";
import * as S from "./style.dashboard";

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
        <S.Background>
          <DashboardHeader />
          <DashboardMain />
        </S.Background>
      )}
    </>
  );
};

export default Dashboard;
