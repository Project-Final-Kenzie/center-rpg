import { ToastContainer } from "react-toastify";
import AuthProvider from "./contexts/AuthContext";
import HistoriesProvider from "./contexts/HistoriesContext";
import Routes from "./routes";

function App() {
  return (
    <>
      <AuthProvider>
        <HistoriesProvider>
          <ToastContainer position="top-center" autoClose={1500} theme="dark"/>
          <Routes />
        </HistoriesProvider>
      </AuthProvider>
    </>
  );
}

export default App;
