import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
	height: 100%;
	padding: 0 30px 0 30px;

	h1 {
		font-size: 2rem;
		font-weight: 500;
		line-height: 1rem;
		color: ${({ theme }) => theme.colors.white.primary};
		text-align: center;
	}

	p {
		font-size: 1rem;
		font-weight: 200;
		line-height: 1rem;
		color: ${({ theme }) => theme.colors.white.secondary};
		text-align: center;
	}

	label {
		font-size: 0.8rem;
		color: ${({ theme }) => theme.colors.white.primary};
		font-weight: 200;
	}

	span {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.9rem;
		font-weight: 200;
		color: ${({ theme }) => theme.colors.white.primary};
		text-align: center;
		gap: 0.3rem;
	}
	@media screen and (max-width: 900px) {
		height: 90%;
	}
`;

export const SideOne = styled.div`
	background-color: ${({ theme }) => theme.colors.yellow.primary};
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 500px;
	max-height: 550px;
	width: 100%;
	height: 100%;
	border-radius: 8px 0 0 8px;

	img {
		width: 450px;
		display: flex;
		align-items: center;
	}

	@media screen and (max-width: 900px) {
		display: none;
	}
`;

export const SideTwo = styled.div`
	background-color: ${({ theme }) => theme.colors.gray.primary};
	max-width: 500px;
	max-height: 550px;
	width: 100%;
	height: 100%;
	border-radius: 0 8px 8px 0;
	img {
		display: none;
	}
	@media screen and (max-width: 900px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 90%;
		img {
			display: inline;
		}
	}
`;

export const LinkStyled = styled(Link)`
	display: block;
	font-size: 0.7rem;
	font-weight: 200;
	color: ${({ theme }) => theme.colors.white.primary};
	text-decoration: none;
`;
