import './App.css';
import AuthProvider from './contexts/AuthContext';
import HistoriesProvider from './contexts/HistoriesContext';
import Routes from './routes';


function App() {
  return (
  <>
    <AuthProvider>
    <HistoriesProvider>
      <Routes/>
    </HistoriesProvider>
    </AuthProvider>
  </>
  );
}

export default App;
