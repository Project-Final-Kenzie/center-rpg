import { HistoriesContext } from "../../contexts/HistoriesContext"
import { IhistoriesData } from "../../interface/typeHistories"
const Home = () => {
    const { HistoriesData } = HistoriesContext(HistoriesContext)
    return(
        <>
            <header>
                <img src='' alt="logotipo" />
                <button>Login</button>
            </header>
            <body>
                <ul>
                {HistoriesData.map((historie: IhistoriesData)=>{
                    return(
                            <li id={`${historie.id}`}>
                            <img src={historie.photo} alt={historie.title} />
                            <div>
                                <p>${historie.title}</p>
                                <p>${historie.description}</p>
                                <button>Ver Mais</button>
                            </div>
                        </li>
                    )
                })
                 }
                </ul>
            </body>
        </>
    )
}

export default Home
