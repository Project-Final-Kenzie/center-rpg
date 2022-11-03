import { createContext, useContext, useEffect, useState } from "react";
import { IauthProviderProps } from "../interface/typeUsers";
import { Api } from "../services/api";
import { IhistoriesData} from "../interface/typeHistories";

interface IHistoriesContext{
    historiesData?: IhistoriesData;
    loading?: boolean;
    getHistoriesData?: () => Promise<void>;
}

const HistoriesContext = createContext<IHistoriesContext>({} as IHistoriesContext)

const HistoriesProvider = ({children} : IauthProviderProps) => {
    const [historiesData, setHistoriesData] = useState<IhistoriesData>()
    const [loading, setLoading] = useState<boolean>(false)

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
   
    return(
        <HistoriesContext.Provider value={{historiesData, loading }}>
            {children}
        </HistoriesContext.Provider>
    )
}

export const userHistoriesContext = () =>{
    const context = useContext(HistoriesContext)
    return context
}
export default HistoriesProvider