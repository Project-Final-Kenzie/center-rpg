import { ToastContainer } from "react-toastify";
import "./App.css";
import AuthProvider from "./contexts/AuthContext";
import HistoriesProvider from "./contexts/HistoriesContext";
import Routes from "./routes";

function App() {
  return (
    <>
      <AuthProvider>
        <HistoriesProvider>
          <ToastContainer position="top-center" autoClose={1500} />
          <Routes />
        </HistoriesProvider>
      </AuthProvider>
    </>
  );
}

export default App;
