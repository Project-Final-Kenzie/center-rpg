import styled from 'styled-components';
import background from '../../assets/img/backgrondhome.png';
import { Link } from 'react-router-dom';

export const StyledContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-image: url(${background});
	-webkit-background-size: cover;
	-o-background-size: cover;
	-moz-background-size: cover;
	background-size: cover;
	min-height: 100vh;

	ul {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		max-width: 1400px;
		width: 100%;
		padding-bottom: 25px;
	}

	@media screen and (max-width: 500px) {
		align-items: center;

		ul {
			overflow-x: scroll;
			fex-wrap: nowrap;
		}
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
	background: ${({ theme }) => theme.colors.gray.primary};
	box-shadow: 0px 10px 64px rgba(0, 0, 0, 0.3);
	border-radius: 30px;
	width: 23%;
	padding: 1rem;
	/* height: 445.24237060546875px; */
	border-radius: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
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
		overflow: hidden;
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
		width: 80%;
		height: 35px;
		background: #f2ef33;
		border-radius: 15px;
		font-weight: 700;
		font-size: 15px;
		color: #717171;
	}

	@media screen and (max-width: 1180px) {
		width: 25%;
		div {
			overflow: hidden;
		}
		img {
			width: 80px;
			height: 80px;
		}
	}
	@media screen and (max-width: 900px) {
		width: 25%;
		div {
			overflow-y: hidden;
		}
	}
	@media screen and (max-width: 700px) {
		width: 40%;
		div {
			overflow-y: hidden;
		}
	}

	@media screen and (max-width: 500px) {
		width: 90%;
	}
`;
