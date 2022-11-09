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
		padding-bottom: 25px;
		max-width: 1400px;
		height: 100%;
	}

	@media screen and (max-width: 1220px) {
		ul {
			gap: 1.5rem;
		}
	}

	@media screen and (max-width: 925px) {
		align-items: center;

		ul {
			gap: 1rem;
		}
	}

	@media screen and (max-width: 720px) {
		align-items: center;

		ul {
			gap: 1rem;
		}
	}

	@media screen and (max-width: 500px) {
		align-items: center;

		ul {
			margin: 0 auto;
			display: flex;
			overflow-x: scroll;
			flex-wrap: nowrap;
		}
	}
`;

export const LinkStyled = styled(Link)`
	width: 98px;
	height: 37px;
	background: ${({ theme }) => theme.colors.white.primary};
	box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.rgb.tertiary};
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

	color: ${({ theme }) => theme.colors.gray.quartiary};
	text-decoration: none;
`;

export const LinkStyledRedirect = styled(Link)`
	width: 80%;
	height: 35px;
	background: ${({ theme }) => theme.colors.yellow.secondary};
	border-radius: 15px;
	font-weight: 700;
	font-size: 15px;

	color: #717171;
	text-decoration: none;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const History = styled.li`
	background: ${({ theme }) => theme.colors.rgb.primary};
	box-shadow: 0px 10px 64px ${({ theme }) => theme.colors.rgb.primary};
	border-radius: 30px;
	width: 23%;
	padding: 1rem;
	height: 445.24237060546875px;
	border-radius: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;

	img {
		width: 150px;
		height: 150px;
		background: ${({ theme }) => theme.colors.white.primary};
		box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.rgb.tertiary};
		border-radius: 100%;
	}
	div::-webkit-scrollbar {
		display: none;
	}
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		overflow-y: scroll;
		-ms-overflow-style: none;
		scrollbar-width: none;
		width: 100%;
		height: 150px;
		background: ${({ theme }) => theme.colors.gray.setiary};
		box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.rgb.tertiary};
		border-radius: 8px;
	}

	p {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
		line-height: 30px;

		text-align: center;

		color: ${({ theme }) => theme.colors.yellow.tertiary};
	}

	div > span {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 300;
		font-size: 12px;
		line-height: 20px;
		text-align: center;
		color: ${({ theme }) => theme.colors.white.primary};

		padding: 0.5rem;
	}

	button {
		width: 80%;
		height: 35px;
		border-radius: 15px;
		font-weight: 700;
		font-size: 15px;
		background: ${({ theme }) => theme.colors.yellow.secondary};
		color: ${({ theme }) => theme.colors.gray.sextiary};
	}

	@media screen and (max-width: 1220px) {
		width: 23%;
		div {
			overflow: scroll;
		}
		img {
			width: 80px;
			height: 80px;
		}
	}
	@media screen and (max-width: 925px) {
		width: 31%;
	}
	@media screen and (max-width: 720px) {
		width: 40%;
		div {
			overflow-y: hidden;
		}
	}

	@media screen and (max-width: 500px) {
		min-width: 20%;
	}
`;
