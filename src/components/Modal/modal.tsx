import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { modalSchema } from "../../validations/modal";
import { IModalHistories } from "../../interface/typeHistories";
import { UserHistoriesContext } from "../../contexts/HistoriesContext";
import * as S from "./style.formModal"
import { StyledInput } from "../Input/style.input";
import { Button } from "../Button/style.button";


export const Modal = () =>{
    const {postNewHistories, setModalAddOpen} = UserHistoriesContext()
    const { register, handleSubmit, formState: { errors } } = useForm<IModalHistories>({
        resolver: yupResolver(modalSchema),
    });

return (

    <S.DivMain>
        <S.DivContainer>
            <S.ButtonClose>
                <button onClick={()=>{setModalAddOpen(false)}}>X</button>
            </S.ButtonClose>

            <S.Title>
                <h1>CRIAR CAMPANHA</h1>
            </S.Title>
            
            <S.DivContainerForm>
                <S.SideOne>
                    <S.Form onSubmit={handleSubmit(postNewHistories)}>
                        <label htmlFor="title">
                            Nome:
                            <StyledInput
                                font="primary"
                                type="text"
                                id="title"
                                placeholder="Digite seu nome"
                                {...register("title")}
                                />
                            <div>
                            <span>{errors.title?.message}</span>
                            </div>
                        </label>

                        <label htmlFor="duration">
                            Duração:
                            <select {...register("duration")}>
                                <option value="">Selecione uma opção</option>
                                <option value="curto">Curta</option>
                                <option value="medio">Média</option>
                                <option value="longo">Longa</option>
                            </select>
                            <div>
                                <span>{errors.duration?.message}</span>
                            </div>
                        </label>

                        <label htmlFor="environment">
                            Ambientação:
                            <StyledInput
                                font="primary"
                                type="text"
                                id="environment"
                                placeholder="Digite aqui a ambientação"
                                {...register("environment")}
                                />
                            <div>
                            <span>{errors.environment?.message}</span>
                            </div>
                        </label>

                        <label htmlFor="photo">
                            Imagem:
                            <StyledInput
                                font="primary"
                                type="text"
                                id="photo"
                                placeholder="Url da imagem"
                                {...register("photo")}
                                />
                            <div>
                            <span>{errors.photo?.message}</span>
                            </div>
                        </label>



                        <label htmlFor="discord">
                            Discord da Campanha:
                            <StyledInput
                                font="primary"
                                type="text"
                                id="discord"
                                placeholder="Digite o discord aqui"
                                {...register("discord")}
                                />
                            <div>
                            <span>{errors.discord?.message}</span>
                            </div>
                        </label>

                        <Button font="secondary" type="submit">
                            Criar
                        </Button>
                    </S.Form>
                </S.SideOne>

                <S.SideTwo>
                <h1>História</h1>
                <form>
                    <textarea id="description" placeholder="Digite aqui a história..." {...register("description")}></textarea>
                    <span>{errors.description?.message}</span>
                </form>
                </S.SideTwo>
            </S.DivContainerForm>
        </S.DivContainer>
    </S.DivMain>
    
)
}