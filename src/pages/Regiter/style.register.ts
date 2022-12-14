import styled from 'styled-components';
import background from '../../assets/img/background.svg';

export const Container = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url(${background});
	-webkit-background-size: cover;
	-o-background-size: cover;
	-moz-background-size: cover;
	background-size: cover;
	height: 100vh;
`;
