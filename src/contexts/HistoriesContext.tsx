import { createContext, useContext, useEffect, useState } from "react";
import { IauthProviderProps, IOwner } from "../interface/typeUsers";
import { Api } from "../services/api";
import { IhistoriesData} from "../interface/typeHistories";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";


interface IHistoriesContext{
    historiesData?: IhistoriesData[];
    loading?: boolean;
    ModalAddOpen ?: boolean;
    setModalAddOpen: React.Dispatch<React.SetStateAction<boolean>>
    postNewHistories: (dados: any) => void
    getHistoriesData?: () => Promise<void>
    removehistories : (id: string) => void
    dados?: any
    members?: any
    owner?: IOwner
}

const HistoriesContext = createContext<IHistoriesContext>({} as IHistoriesContext)

const HistoriesProvider = ({children} : IauthProviderProps) => {
    const [historiesData, setHistoriesData] = useState<IhistoriesData[]>()
    const { user } = useContext(UserContext)
    const [loading, setLoading] = useState<boolean>(false)
    const [ModalAddOpen, setModalAddOpen] = useState<boolean>(false)
    const navigate = useNavigate()
       
    const getHistoriesData = async () =>{
        try {
            const { data } = await Api.get('/histories')
            setHistoriesData(data)
            setLoading(true)
        } catch (error) {

        console.error(error)

        }
    }

    useEffect(() =>{
        getHistoriesData()
    }, [])

    async function postNewHistories (dados : IHistoriesContext){
        dados = {...dados, owner: {id: user?.id, name: user?.name, email: user?.email}, members: []}
      try {
            await Api.post('/histories', dados)
            getHistoriesData()
            toast.success('Sua historia foi adicionada com sucesso')
            setModalAddOpen(false)
        } catch (error) {

            toast.error('Ops! Algo deu errado')
            
            console.error(error)
        }
        
    }

    async function removehistories(id: string){
        try {
            await Api.delete(`/histories/${id}`)
            getHistoriesData()
            navigate('/dashboard')
        } catch (error) {
            console.error(error)
        }
    }


    return(
        <HistoriesContext.Provider value={{historiesData, loading, setModalAddOpen,  ModalAddOpen, postNewHistories, removehistories}}>
            {children}
        </HistoriesContext.Provider>
    )
}

export const UserHistoriesContext = () =>{
    const context = useContext(HistoriesContext)
    return context
}
export default HistoriesProvider