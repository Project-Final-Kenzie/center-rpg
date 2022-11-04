import logo from '../../assets/img/logo.svg';
import brand from '../../assets/img/logo-branca.svg';
import { Button } from '../Button/style.button';
import { StyledInput } from '../Input/style.input';
import * as S from './style.formLogin';

const FormLogin = () => {
	return (
		<>
			<S.SideOne>
				<img src={logo} alt='' />
			</S.SideOne>
			<S.SideTwo>
				<img src={brand} alt='' />
				<S.Form>
					<h1>Faça o login</h1>
					<p>Faça seu login e se aventure</p>

					<label htmlFor='email'>
						Email
						<StyledInput font='primary' type='email' id='email' placeholder='Digite seu email' />
						<div>
							<span>teste</span>
						</div>
					</label>

					<label htmlFor='password'>
						Senha
						<StyledInput font='primary' type='password' id='password' placeholder='Digite sua senha' />
						<div>
							<span>teste</span>
						</div>
					</label>

					<Button font='primary' type='submit'>
						Entrar
					</Button>
				</S.Form>
				<span className='help-text'>
					Não tem conta?
					<S.LinkStyled to={'/register'}>Registre-se</S.LinkStyled>
				</span>
			</S.SideTwo>
		</>
	);
};

export default FormLogin;
