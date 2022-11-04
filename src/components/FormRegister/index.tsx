import logo from '../../assets/img/logo.svg';
import d20 from '../../assets/img/d20.svg';

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
				<h1>Cadastro</h1>
				<S.Div>
					{/* <S.Image src={d20} alt='' /> */}
					<S.LinkStyled to='/login'>Voltar</S.LinkStyled>
				</S.Div>
				<S.Form>
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
