import { Routes, Route, Navigate} from "react-router-dom"
import HistoriesProvider from "../contexts/HistoriesContext"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Regiter"

const RoutesMain = () => (
    
    <Routes>
        <HistoriesProvider>
            <Route path="/home" element={<Home/>}/>
        </HistoriesProvider>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        
        <Route path="*" element={<Navigate to="home" />}/>
    </Routes>
    
)

export default RoutesMain
