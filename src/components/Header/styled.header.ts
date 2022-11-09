import styled from 'styled-components';

export const StyledHeader = styled.header`
	background: ${({ theme }) => theme.colors.yellow.secondary};
	box-shadow: 8px 8px 4px ${({ theme }) => theme.colors.rgb.tertiary};

	div {
		height: 100%;
		border-radius: 8px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		max-width: 1400px;
		width: 100%;
		margin: auto;
	}

	img {
		max-height: 79px;
		max-width: 64px;
	}
`;
