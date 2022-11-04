import logo from '../../assets/img/logo.svg';
import { Button } from '../Button/style.button';
import { StyledInput } from '../Input/style.input';
import * as S from './style.formRegister';
import Logo from '../../assets/img/logo.svg';

const FormRegister = () => {
	return (
		<>
			<S.SideOne>
				<img src={logo} alt='' />
			</S.SideOne>
			<S.SideTwo>
				<S.Form>
					<h1>Cadastro</h1>
					<S.Div>
						<S.Image src={Logo} alt='' />
						<S.LinkStyled to='/login'>Voltar</S.LinkStyled>
					</S.Div>

					<label htmlFor='name'>Nome</label>
					<StyledInput font='secondary' type='text' id='name' placeholder='Digite seu nome' />

					<label htmlFor='email'>Email</label>
					<StyledInput font='secondary' type='email' id='email' placeholder='Digite seu email' />

					<label htmlFor='password'>Senha</label>
					<StyledInput font='secondary' type='password' id='password' placeholder='Digite sua senha' />

					<label htmlFor='confirmPassword'>Confirmação de senha</label>
					<StyledInput font='secondary' type='password' id='confirmPassword' placeholder='Confirme sua senha' />

					<label htmlFor='confirmPassword'>Selecione seu nível</label>
					<select>
						<option value='iniciante'>Iniciante</option>
						<option value='intermediario'>Intermediário</option>
						<option value='avancado'>Avançado</option>
					</select>

					<Button font='secondary' type='submit'>
						Entrar
					</Button>
				</S.Form>
			</S.SideTwo>
		</>
	);
};

export default FormRegister;
