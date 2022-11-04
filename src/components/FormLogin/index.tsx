import logo from '../../assets/img/logo.svg';
import bkgLogo from '../../assets/img/multples-dices.svg';
import { Button } from '../Button/style.button';
import { StyledInput } from '../Input/style.input';
import * as S from './style.formLogin';

const FormLogin = () => {
	return (
		<>
			<S.SideOne>
				<img src={logo} alt='' />
				{/* <img src={bkgLogo} alt='' /> */}
			</S.SideOne>
			<S.SideTwo>
				<img src={logo} alt='' />
				<S.Form>
					<h1>Faça o login</h1>
					<p>Faça seu login e se aventure</p>

					<label htmlFor='email'>Email</label>
					<StyledInput font='primary' type='email' id='email' placeholder='Digite seu email' />

					<label htmlFor='password'>Senha</label>
					<StyledInput font='primary' type='password' id='password' placeholder='Digite sua senha' />

					<Button font='primary' type='submit'>
						Entrar
					</Button>

					<span>
						Não tem conta?
						<S.LinkStyled to={'/register'}>Registre-se</S.LinkStyled>
					</span>
				</S.Form>
			</S.SideTwo>
		</>
	);
};

export default FormLogin;
