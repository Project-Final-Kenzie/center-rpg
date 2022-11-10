import { StyledHeader } from '../../components/Header/styled.header';
import * as S from './style.campaign';
import logo from "../../assets/img/d20.svg";


export const Compaings = () => {
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
                   
                    <h3>Nome da campanha aqui</h3>
                </S.DivTitle>

                <S.DivContainer>

                    <S.SideOne>

                        <S.DivMaster>
                            <div className='sideOne'>
                                <img src={logo} alt=''></img>
                            </div>
                            <div className='sideTwo'>
                                <h1>Dados do Mestre</h1>
                               
                                <p>Nome: Nome Aqui</p>        
                                <p>Email: Email aqui</p>
                            </div>
                        </S.DivMaster>
                        
                        <S.DivData>
                            <div className='dataStyle'>
                                <h1>Duração da Campanha:</h1>
                                <p>Lógica Aqui</p>
                            </div>
                            <div className='dataStyle'>
                                <h1>Ambienteção:</h1>
                                <p>Lgica Aqui</p>ó
                            </div>
                            <div className='dataStyleTwo'>
                                <h1>Discord da Capanha:</h1>
                                <S.LinkStyled to={"/teste"}>Lógica Aqui</S.LinkStyled>
                            </div>
                        </S.DivData>
                        <S.DivButton>
                            <button>Ingressar nessa campanha</button>
                        </S.DivButton>
                        <S.DivUsers>
                            <div className='DivTitleUser'>
                                <h1>Membros da Campanha</h1>
                            </div>

                            <div className='container'>
                                <ul>
                                    <li>
                                        <div className='sideOne'>
                                            <p>Nome: Nome Aqui </p>
                                            <p>Nivel: Nível aqui</p>
                                        </div>
                                        <div className='sideTwo'>
                                        <button>X</button>
                                        </div>
                                    </li>
                                </ul>

                                <ul>
                                    <li>
                                        <div className='sideOne'>
                                            <p>Nome: Nome Aqui </p>
                                            <p>Nivel: Nível aqui</p>
                                        </div>
                                        <div className='sideTwo'>
                                        <button>X</button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </S.DivUsers>

                    </S.SideOne>
                    
                    <S.SideTwo>

                        <S.DivHistory>
                            <h1>História</h1>
                            <p>testestestestestes</p>
                        </S.DivHistory>

                    </S.SideTwo>

                </S.DivContainer>

            </S.DivMain>

        </S.DivBody>
    )
}