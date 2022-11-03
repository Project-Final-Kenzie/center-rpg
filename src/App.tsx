import "./App.css";
import AuthProvider from "./contexts/AuthContext";
import RoutesMain from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <AuthProvider>
        <RoutesMain />
        <ToastContainer limit={2} autoClose={1300} />
      </AuthProvider>
    </>
  );
}

export default App;
