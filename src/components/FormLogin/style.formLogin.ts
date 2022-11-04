import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding: 0 30px 0 30px;

	h1 {
		font-size: 35px;
		font-weight: 500;
		line-height: 24px;
		color: ${({ theme }) => theme.colors.white.primary};
		text-align: center;
	}

	p {
		font-size: 16px;
		font-weight: 200;
		line-height: 24px;
		color: ${({ theme }) => theme.colors.white.secondary};
		text-align: center;
		margin-top: 20px;
	}

	label {
		font-size: 14px;
		color: ${({ theme }) => theme.colors.white.primary};
		font-weight: 200;
		margin-bottom: 10px;
	}

	span {
		display: flex;
		align-items: center;
		margin: 20px auto;
		font-size: 12px;
		font-weight: 200;
		color: ${({ theme }) => theme.colors.white.primary};
		text-align: center;
		gap: 5px;
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

	h2 {
		font-size: 48px;
		font-weight: 500;
		color: ${({ theme }) => theme.colors.white.primary};
		text-align: center;
		margin-top: 45px;
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
		width: 90%;
		img {
			display: inline;
			width: 80px;
		}
	}
`;

export const LinkStyled = styled(Link)`
	display: block;
	font-size: 12px;
	font-weight: 200;
	color: ${({ theme }) => theme.colors.white.primary};
	text-decoration: none;
`;
