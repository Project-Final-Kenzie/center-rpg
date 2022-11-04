import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 0 30px 0 30px;
	gap: 1rem;
	width: 100%;
	height: 100%;

	h1 {
		font-size: 2.4rem;
		font-weight: 500;
		line-height: 24px;
		color: ${({ theme }) => theme.colors.white.primary};
		text-align: center;
	}

	p {
		font-size: 1rem;
		font-weight: 200;
		line-height: 24px;
		color: ${({ theme }) => theme.colors.white.secondary};
		text-align: center;
	}

	label {
		font-size: 0.8rem;
		color: ${({ theme }) => theme.colors.white.primary};
		font-weight: 200;
	}

	select {
		width: 100%;
		height: 2.6rem;
		padding: 0 10px 0 10px;
		border-radius: 0.5rem;
		background-color: ${({ theme }) => theme.colors.white.tertiary};
	}
`;

export const SideOne = styled.div`
	background-color: ${({ theme }) => theme.colors.yellow.primary};
	max-width: 500px;
	max-height: 650px;
	display: flex;
	align-items: center;
	justify-content: center;
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
	width: 500px;
	height: 650px;
	border-radius: 0 8px 8px 0;

	@media screen and (max-width: 900px) {
		width: 90%;
	}
`;

export const Image = styled.img`
	display: none;
	width: 50px;
	@media screen and (max-width: 900px) {
		display: inline;
	}
`;

export const Div = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const LinkStyled = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	width: 70px;
	height: 30px;
	padding: 10px;
	border-radius: 8px;
	font-size: 0.8rem;
	color: ${({ theme }) => theme.colors.gray.secondary};
	font-weight: 200;
	background-color: ${({ theme }) => theme.colors.gray.tertiary};
`;
