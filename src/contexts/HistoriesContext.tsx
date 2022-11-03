import { createContext, useEffect, useState } from "react";
import { IauthProviderProps } from "../interface/typeUsers";
import { Api } from "../services/api";
import { IhistoriesData} from "../interface/typeHistories";

interface IHistoriesContext{
    HistoriesData?: IhistoriesData | undefined;
    getHistoriesData?: () => Promise<void>;
}

export const HistoriesContext = createContext<IHistoriesContext>({} as IHistoriesContext)

const HistoriesProvider = ({children} : IauthProviderProps) => {
    const [HistoriesData, SetHistoriesData] = useState<IhistoriesData>()

    useEffect(() =>{
        const getHistoriesData = async () =>{
            try {
            const { data } = await Api.get('/histories')
            console.log(data)
            SetHistoriesData(data)
            
            } catch (error) {
    
            console.error(error)
    
            }
        }
        getHistoriesData()
    }, [])
   
    return(
        <HistoriesContext.Provider value={{HistoriesData}}>
            {children}
        </HistoriesContext.Provider>
    )
}

export default HistoriesProvider