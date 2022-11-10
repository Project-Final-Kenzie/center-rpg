import styled from 'styled-components';

export const StyledHeader = styled.header`
	background: ${({ theme }) => theme.colors.yellow.secondary};
	box-shadow: 8px 8px 4px ${({ theme }) => theme.colors.rgb.tertiary};

	div {
		height: 69px;
		border-radius: 8px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 60%;
		margin: auto;
	}

	img {
		max-height: 79px;
		max-width: 64px;
	}

	@media (max-width: 768px) {
		div {
			width: 90%;
		}
	}
`;
