import { StyledHeader } from '../../components/Header/styled.header';
import * as S from './style.campaign';
import logo from "../../assets/img/d20.svg";
import { useParams } from 'react-router-dom';
import { Api } from '../../services/api';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/AuthContext';


export const Compaings = ()=> {
    const { id } = useParams();
    const { user } = useContext(UserContext)
    const [ detailHistorie, setDetailHistorie] = useState<any>()
    const [loading , setLoading] = useState<boolean>(true)

    
    async function getHistorieDetails(id : string | undefined) {
        try {
            const { data } = await Api.get(`/histories/${id}`)
            setDetailHistorie(data)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    } 

    async function addMember() {
        const newMembers={id : user?.id, name : user?.name, level:user?.level}
        const newArray =[...detailHistorie.members, newMembers]
        const newData = {members : newArray}
         try {
            await Api.patch(`/histories/${id}`, newData)
            getHistorieDetails(id)
        } catch (error) {
            
        }
    }


    useEffect(() => {
        getHistorieDetails(id)
    }, [id])

    if(loading){
        return <p>Caregando</p>;
    }
    return(
        <S.DivBody>
            <StyledHeader>
                <nav>
                    <div>
                        <img src={logo} alt="Central RPG" />
                        <S.LinkStyledButton to={"/dashboard"}>Voltar</S.LinkStyledButton>
                    </div>
                </nav>
            </StyledHeader>

            <S.DivMain>

                <S.DivTitle>
                    <h1>Seja bem vindo a campanha</h1>
                   
                    <h3>{detailHistorie.title}</h3>
                </S.DivTitle>

                <S.DivContainer>

                    <S.SideOne>

                        <S.DivMaster>
                            <div className='sideOne'>
                                <img src={detailHistorie.photo} alt=''></img>
                            </div>
                            <div className='sideTwo'>
                                <h1>Dados do Mestre</h1>
                               
                                <p>Nome: {detailHistorie.owner.name}</p>        
                                <p>Email: {detailHistorie.owner.email}</p>
                            </div>
                        </S.DivMaster>
                        
                        <S.DivData>
                            <div className='dataStyle'>
                                <h1>Duração da Campanha:</h1>
                                <p>{detailHistorie.duration}</p>
                            </div>
                            <div className='dataStyle'>
                                <h1>Ambienteção:</h1>
                                <p>{detailHistorie.environment}</p>
                            </div>
                            <div className='dataStyleTwo'>
                                <h1>Discord da Capanha:</h1>
                                <S.LinkStyled to={`${detailHistorie.discord}`}>Clique Aqui</S.LinkStyled>
                            </div>
                        </S.DivData>
                        <S.DivButton>
                            <button onClick={addMember}>Ingressar nessa campanha</button>
                        </S.DivButton>
                        <S.DivUsers>
                            <div className='DivTitleUser'>
                                <h1>Membros da Campanha({detailHistorie.members.length})</h1>
                            </div>

                            <div className='container'>
                                <ul>
                                    {detailHistorie.members.map((member : {id: string, name: string, level: string})=>{
                                        return(
                                            <li id={member.id} key={`${member.id}`}>
                                            <div className='sideOne'>
                                                <p>Nome: {member.name}</p>
                                                <p>Nivel: {member.level}</p>
                                            </div>
                                            <div className='sideTwo'>
                                                <>{console.log(member.id, user?.id)}</>
                                            {member.id === user?.id && 
                                            <>
                                             <button>X</button>
                                            </>

                                                }
                                            
                                            </div>
                                        </li>
                                        )
                                        })
                                    }

                                </ul>
                            </div>
                        </S.DivUsers>

                    </S.SideOne>
                    
                    <S.SideTwo>

                        <S.DivHistory>
                            <h1>História</h1>
                            <p>{detailHistorie.description}</p>
                        </S.DivHistory>

                    </S.SideTwo>

                </S.DivContainer>

            </S.DivMain>

        </S.DivBody>
    )

}

