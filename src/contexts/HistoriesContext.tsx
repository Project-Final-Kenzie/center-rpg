import { createContext, useContext, useEffect, useState } from "react";
import { IauthProviderProps } from "../interface/typeUsers";
import { Api } from "../services/api";
import { IhistoriesData} from "../interface/typeHistories";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


interface IHistoriesContext{
    historiesData?: IhistoriesData[];
    loading?: boolean;
    ModalAddOpen ?: boolean;
    setModalAddOpen: React.Dispatch<React.SetStateAction<boolean>>
    postNewHistories: (dados: any) => void
    getHistoriesData?: () => Promise<void>
    dados?: any
    owner?: string | null

}

const HistoriesContext = createContext<IHistoriesContext>(
  {} as IHistoriesContext
);


const HistoriesProvider = ({children} : IauthProviderProps) => {
    const [historiesData, setHistoriesData] = useState<IhistoriesData[]>()
    const [loading, setLoading] = useState<boolean>(false)
    const [ModalAddOpen, setModalAddOpen] = useState<boolean>(false)

    useEffect(() =>{
        const getHistoriesData = async () =>{
            try {
                const { data } = await Api.get('/histories')
                setHistoriesData(data)
                setLoading(true)
            } catch (error) {
    
            console.error(error)
    
            }
        }
        getHistoriesData()
    }, [])
   
    
    async function postNewHistories (dados : IHistoriesContext){
        const userId = localStorage.getItem("@USERID")
        dados = {...dados, owner: userId}
      try {
            await Api.post('/histories', dados)
            toast.success('Sua historia foi adicionada com sucesso')

        } catch (error) {

            toast.error('Ops! Algo deu errado', {
                position: "top-right",
                autoClose: 1000,
                theme: "dark",})
            
            console.error(error)
        }

    }

    return(
        <HistoriesContext.Provider value={{historiesData, loading, setModalAddOpen,  ModalAddOpen, postNewHistories}}>
            {children}
        </HistoriesContext.Provider>
    )
}

  return (
    <HistoriesContext.Provider value={{ historiesData, loading }}>
      {children}
    </HistoriesContext.Provider>
  );
};

export const UserHistoriesContext = () => {
  const context = useContext(HistoriesContext);
  return context;
};
export default HistoriesProvider;
