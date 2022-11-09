import { StyledHeader } from '../../components/Header/styled.header';
import { History, LinkStyled, StyledContainer } from './styled.home';
import { historiesData } from '../../constants/histories';

//import { UserHistoriesContext } from "../../contexts/HistoriesContext";
//import { IhistoriesData } from "../../interface/typeHistories";

import logo from '../../assets/img/d20.svg';
import { Carousel } from '../../components/carousel';

const Home = () => {
	//const { historiesData, loading } = UserHistoriesContext();

	/*if (!loading) {
    return <p>Carregando...</p>;
  }
  Comentado para poder estilizar o retorno abaixo
  */

	return (
		<>
			<StyledHeader>
				<div>
					<img src={logo} alt='logotipo' />
					<LinkStyled to={'/login'}>Login</LinkStyled>
				</div>
			</StyledHeader>

			<StyledContainer>
				<Carousel />

				<ul>
					{historiesData?.map((h /*: IhistoriesData*/) => {
						return (
							<History key={`${h.id}`}>
								<img src={h.photo} alt={h.title} />

								<p>{h.title}</p>

								<div>
									<span>{h.description}</span>
								</div>
								<button>Ver Mais</button>
							</History>
						);
					})}
				</ul>
			</StyledContainer>
		</>
	);
};

export default Home;
