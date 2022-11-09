import styled from 'styled-components';
import background from '../../assets/img/background_home.svg';
import { Link } from 'react-router-dom';

export const StyledContainer = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url(${background});
	-webkit-background-size: cover;
	-o-background-size: cover;
	-moz-background-size: cover;
	background-size: cover;
	min-height: 100vh;

	ul {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		max-width: 100%;
		width: 1400px;
		flex-wrap: wrap;
		padding-bottom: 25px;
	}
`;

export const LinkStyled = styled(Link)`
	width: 98px;
	height: 37px;
	background: #ffffff;
	box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;

	font-family: 'Roboto';
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 16px;
	display: flex;
	align-items: center;
	text-align: center;

	color: #454545;
	text-decoration: none;
`;

export const History = styled.li`
	background: rgba(156, 156, 153, 0.3);

	box-shadow: 0px 10px 64px rgba(0, 0, 0, 0.3);
	border-radius: 30px;
	width: 300px;
	height: 445.24237060546875px;
	border-radius: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	align-items: center;
	gap: 1rem;

	img {
		max-width: 150px;
		max-height: 150px;
		background: #ffffff;
		box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
		border-radius: 100%;
	}
	div {
		width: 229px;
		height: 159px;
		background: #89898929;
		box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
		border-radius: 8px;
	}

	p {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
		line-height: 30px;

		text-align: center;

		color: #fff500;
	}
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}
	div > span {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 300;
		font-size: 12px;
		line-height: 20px;
		text-align: center;
		color: #ffffff;
		padding: 0.5rem;
	}

	button {
		width: 211px;
		height: 35px;
		background: #f2ef33;
		border-radius: 15px;
		font-weight: 700;
		font-size: 15px;
		color: #717171;
	}
	@media screen and (max-width: 900px) {
		width: 175px;

		img {
			max-width: 100px;
			max-height: 100px;
		}
	}
`;
