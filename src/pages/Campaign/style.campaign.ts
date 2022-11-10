import styled from 'styled-components';
import { Link } from 'react-router-dom';
import background from '../../assets/img/bkgcamp.png';

export const DivBody = styled.body`
	background-image: url(${background});
	-webkit-background-size: cover;
	-o-background-size: cover;
	-moz-background-size: cover;
	background-size: cover;
	@media (min-width: 768px) {
		height: 100vh;
	}
`;

export const DivMain = styled.main`
	max-width: 980px;
	width: 90%;
	background-color: ${({ theme }) => theme.colors.rgb.quartiary};
	border-radius: 80px 8px 80px 8px;
	margin: 50px auto;
	padding: 20px;

	@media (max-width: 780px) {
		display: flex;
		flex-direction: column;
	}
`;

export const DivContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	justify-content: space-around;

	@media (max-width: 780px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const SideOne = styled.div`
	width: 45%;
	display: flex;
	flex-direction: column;
	@media (max-width: 768px) {
		width: 90%;
	}
`;

export const SideTwo = styled.div`
	width: 45%;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const LinkStyledButton = styled(Link)`
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
	font-size: 0.8rem;
	line-height: 16px;
	display: flex;
	align-items: center;
	text-align: center;

	color: ${({ theme }) => theme.colors.gray.quartiary};
	text-decoration: none;
`;

export const LinkStyled = styled(Link)`
	font-size: 1rem;
	color: ${({ theme }) => theme.colors.yellow.secondary};
`;

export const DivTitle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1 {
		font-size: 1.6rem;
		color: ${({ theme }) => theme.colors.white.primary};
	}

	h3 {
		font-size: 1.13rem;
		color: ${({ theme }) => theme.colors.yellow.secondary};
	}
`;

export const DivMaster = styled.div`
	border: 1px solid ${({ theme }) => theme.colors.white.primary};
	width: 100%;
	display: flex;
	border-radius: 80px 8px 80px 8px;
	padding: 10px;
	gap: 10px;
	margin-top: 20px;

	.sideOne {
		background-color: white;
		border-radius: 80px 8px 80px 8px;

		img {
			max-width: 150px;
			max-height: 150px;
			width: 100%;
			height: 100%;
		}
	}

	.sideTwo {
		display: flex;
		flex-direction: column;
		gap: 5px;
		margin-top: 45px;

		h2 {
			font-size: 1.2rem;
			color: ${({ theme }) => theme.colors.white.primary};
		}

		p {
			font-size: 1rem;
			color: ${({ theme }) => theme.colors.white.primary};
			font-weight: 200;
		}

		@media (max-width: 500px) {
			margin-top: 0px;
		}
	}

	@media (max-width: 500px) {
		.sideOne {
			width: 40%;
			height: 20%;
		}
	}
`;

export const DivData = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 0.3rem;
	margin: 8px 0 8px 0;
	.dataStyle {
		width: 100%;
		display: flex;

		h2 {
			font-size: 1.2rem;
			color: ${({ theme }) => theme.colors.white.primary};
		}

		strong {
			margin-left: 0.2rem;
			font-size: 1rem;
			color: ${({ theme }) => theme.colors.yellow.secondary};
		}
	}

	.dataStyleTwo {
		display: flex;
		gap: 5px;

		h2 {
			font-size: 1.2rem;
			color: ${({ theme }) => theme.colors.white.primary};
		}
	}
`;

export const DivButton = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 45px;
	button {
		background-color: ${({ theme }) => theme.colors.yellow.quartiary};
		width: 60%;
		border-radius: 8px;
		font-size: 1rem;
		font-weight: 700;
		color: ${({ theme }) => theme.colors.gray.secondary};
	}
`;

export const DivUsers = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	.DivTitleUser {
		font-size: 1rem;
		color: ${({ theme }) => theme.colors.white.primary};
		margin-top: 10px;
	}

	.container {
		border: 1px solid ${({ theme }) => theme.colors.white.primary};
		display: flex;
		width: 100%;
		flex-direction: column;
		justify-content: center;
		border-radius: 80px 8px 80px 8px;
		padding: 10px;
		gap: 10px;

		ul {
			background-color: ${({ theme }) => theme.colors.gray.primary};

			width: 90%;
			padding: 15px;
			border-radius: 8px;
			margin: 0 auto;
		}
		li {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		p {
			font-size: 1rem;
			color: ${({ theme }) => theme.colors.white.primary};
			margin-left: 10px;
			margin-bottom: 5px;
		}

		button {
			background-color: ${({ theme }) => theme.colors.gray.tertiary};
			padding: 4px;
			margin-bottom: 20px;
			border-radius: 4px;
			font-size: 1rem;
			font-weight: 700;
			color: ${({ theme }) => theme.colors.gray.primary};
		}

		@media (max-width: 500px) {
			border-radius: 20px 8px 20px 8px;
		}
	}
`;

export const DivHistory = styled.div`
	h2 {
		font-size: 2.2rem;
		color: ${({ theme }) => theme.colors.white.primary};
		width: 100%;
		text-align: center;
	}

	p {
		background-color: ${({ theme }) => theme.colors.white.primary};
		height: 500px;
		border-radius: 80px 8px 80px 8px;
		font-size: 0.99rem;
		padding: 50px;
	}
`;
