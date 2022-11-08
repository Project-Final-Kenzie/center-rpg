import styled from 'styled-components'


export const DivMain = styled.main`

    background-color: ${({ theme }) => theme.colors.gray.secondary};
    width: 900px;
    height:600px;
    border-radius: 10px;

    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);

`

export const ButtonClose = styled.div`
    display: flex;
    justify-content: end;
    padding: 10px;

    button{
        background-color: ${({ theme }) => theme.colors.gray.quartiary};
        width: 30px;
        height: 30px;
        border-radius: 4px;
        font-size: 18px;
        color: ${({ theme }) => theme.colors.white.secondary};
    }


`

export const Title = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    
    h1 {
            font-size: 2rem;
            font-weight: 500;
            line-height: 1rem;
            color: ${({ theme }) => theme.colors.yellow.secondary};
            text-align: center;
        }

`

export const DivContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px auto;
    width: 800px;
    height: 500px;
    

`

export const Form = styled.form`

    display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 0.5rem;
	width: 100%;
	padding: 0 30px 0 30px;

    label {
		font-size: 0.9rem;
		color: ${({ theme }) => theme.colors.white.primary};
		font-weight: 200;
        
	}

    div {
		border: 1px transparent solid;
		width: 100%;
		height: 15px;
		span {
			font-size: 0.8rem;
		}
	}

    select {
		width: 100%;
		height: 2.6rem;
		padding: 0 10px 0 10px;
		border-radius: 0.5rem;
		background-color: ${({ theme }) => theme.colors.white.tertiary};
	}

    button{
        font-size:18px;
        font-weight:500;
    }

`

export const SideOne = styled.div`

    min-width: 50%;
    height: 100%;

`

export const SideTwo = styled.div`
    min-width: 50%;
    height: 100%;

    h1{
        text-align: center;
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.white.primary};
        margin-bottom: 10px;
    }

    textarea{
        min-width: 400px;
        max-width: 400px;
        min-height: 360px;
        max-height: 360px;
        border-radius: 40px 0 40px 0;
        font-size: 0.9rem;
        letter-spacing: 1px;
        line-height: 1.5;
        padding: 15px;
        
    }

`

