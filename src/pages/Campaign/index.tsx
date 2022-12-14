import { StyledHeader } from '../../components/Header/styled.header';
import * as S from './style.campaign';
import logo from '../../assets/img/d20.svg';
import { useParams } from 'react-router-dom';
import { Api } from '../../services/api';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/AuthContext';
import { UserHistoriesContext } from '../../contexts/HistoriesContext';


export const Compaings = ()=> {
    const { id } = useParams();
    const { user } = useContext(UserContext)
    const { removehistories } = UserHistoriesContext()
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

    function adjustButtons(){
        if(detailHistorie.owner.id === user?.id){
            return(<button onClick={() => {removehistories(detailHistorie.id)}}>Excluir essa campanha</button>)
        }else if(detailHistorie.members.some((element : {id : string}) => element.id === `${user?.id}`)){
            return(<button>Sair da campanha</button>)
        }else{
            return(<button onClick={addMember}>Ingressar nessa campanha</button>)
        }
    }

    function removeButton(memberId : string, ownerId : string){
        if(user?.id === ownerId || `${user?.id}` === memberId){
            return <button>X</button>
        }
    }

    
    useEffect(() => {
        getHistorieDetails(id)
    }, [id])

    if(loading){
        return <p>Caregando</p>;
    }

	return (
		<>
			<StyledHeader>
				<nav>
					<div>
						<img src={logo} alt='Central RPG' />
						<S.LinkStyledButton to={'/dashboard'}>Voltar</S.LinkStyledButton>
					</div>
				</nav>
			</StyledHeader>


			<S.DivBody>
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
                                <h2>Dados do Mestre</h2>
                               
                                <p>Nome: {detailHistorie.owner.name}</p>        
                                <p>Email: {detailHistorie.owner.email}</p>
                            </div>
                        </S.DivMaster>
                        
                        <S.DivData>
                            <div className='dataStyle'>
                                <h2>
                                    Dura????o da Campanha: <strong>{detailHistorie.duration}</strong>
                                </h2>
                            </div>
                            <div className='dataStyle'>
                                <h2>
                                    Ambiente????o: <strong>{detailHistorie.environment}</strong>
                                </h2>
                            </div>
                            <div className='dataStyleTwo'>
                                <h2>Discord da Capanha:</h2>
                                <S.LinkStyled href={detailHistorie.discord} target="_blank">Clique Aqui</S.LinkStyled>
                            </div>
                        </S.DivData>
                        <S.DivButton>
                            {adjustButtons()}
                        </S.DivButton>
                        <S.DivUsers>
                            <div className='DivTitleUser'>
                                <h2>Membros da Campanha({detailHistorie.members.length})</h2>
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
                                                {removeButton(member.id, detailHistorie.owner.id )}
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
                            <h2>Hist??ria</h2>
                            <div className='historyContainer'>
                                <p>{detailHistorie.description}</p>
                            </div>
                        </S.DivHistory>

                    </S.SideTwo>

                </S.DivContainer>

            </S.DivMain>

        </S.DivBody>
        </>
    )
}