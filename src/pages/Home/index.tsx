import { UserHistoriesContext } from "../../contexts/HistoriesContext"
import { IhistoriesData } from "../../interface/typeHistories"

const Home = () => {
    const { historiesData, loading } = UserHistoriesContext()

    if(!loading){
        return <p>Carregando...</p>
    }

    return(
        <>
            <header>
                <img src='' alt="logotipo" />
                <button>Login</button>
            </header>
            <div>
                <ul>
                {historiesData?.map((historie: IhistoriesData)=>{
                    return(
                            <li key={`${historie.id}`}>
                            <img src={historie.photo} alt={historie.title} />
                            <div>
                                <p>{historie.title}</p>
                                <p>{historie.description}</p>
                                <button>Ver Mais</button>
                            </div>
                        </li>
                    )
                })
                 }
                </ul>
            </div>
        </>
    )
}

export default Home
