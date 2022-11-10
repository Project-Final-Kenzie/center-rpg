import { StyledHeader } from '../../components/Header/styled.header';
import * as S from './style.campaign';
import logo from '../../assets/img/d20.svg';

export const Compaings = () => {
	return (
		<S.DivBody>
			<StyledHeader>
				<nav>
					<div>
						<img src={logo} alt='Central RPG' />
						<S.LinkStyledButton to={'/dashboard'}>Voltar</S.LinkStyledButton>
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
								<h2>Dados do Mestre</h2>

								<p>Nome: Nome Aqui</p>
								<p>Email: Email aqui</p>
							</div>
						</S.DivMaster>

						<S.DivData>
							<div className='dataStyle'>
								<h2>
									Duração da Campanha: <strong>Lógica Aqui</strong>
								</h2>
							</div>
							<div className='dataStyle'>
								<h2>
									Ambienteção: <strong>Lógica Aqui</strong>
								</h2>
							</div>
							<div className='dataStyleTwo'>
								<h2>Discord da Capanha:</h2>
								<S.LinkStyled to={'/teste'}>Lógica Aqui</S.LinkStyled>
							</div>
						</S.DivData>
						<S.DivButton>
							<button>Ingressar nessa campanha</button>
						</S.DivButton>
						<S.DivUsers>
							<div className='DivTitleUser'>
								<h2>Membros da Campanha</h2>
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
							<h2>História</h2>
							<div className='historyContainer'>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestias vitae, consectetur ut incidunt
									provident illo ipsum eos, perspiciatis illum debitis adipisci soluta nobis ad dolore sapiente accusantium eum
									laudantium!
								</p>
							</div>
						</S.DivHistory>
					</S.SideTwo>
				</S.DivContainer>
			</S.DivMain>
		</S.DivBody>
	);
};
