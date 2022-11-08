import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { modalSchema } from "../../validations/modal";
import { IModalHistories } from "../../interface/typeHistories";
import { UserHistoriesContext } from "../../contexts/HistoriesContext";

export const Modal = () =>{
    const {postNewHistories, setModalAddOpen} = UserHistoriesContext()
    const { register, handleSubmit, formState: { errors } } = useForm<IModalHistories>({
        resolver: yupResolver(modalSchema),
    });

return (
    <>
        <h1>Criar Campanha</h1>
        <form onSubmit={handleSubmit(postNewHistories)}>
        <div>
            <label htmlFor='description'>Historia</label>
            <input id='description' {...register("description")}/>
            <span>{errors.description?.message}</span>

        </div>
        <div>
            <label htmlFor='title'>Nome</label>
            <input id='title' {...register("title")}/>
            <span>{errors.title?.message}</span>

            <label htmlFor='duration'>Duração</label>
            <select {...register("duration")}>
                <option value="">Escolha a duração</option>
                <option value="curta">Curta</option>
                <option value="media">Media</option>
                <option value="longa">Longa</option>
            </select>
            <span>{errors.duration?.message}</span>

            <label htmlFor='environment'>Ambientação</label>
            <input id='environment' {...register("environment")}/>
            <span>{errors.environment?.message}</span>

            <label htmlFor='discord'>Discord da campanha</label>
            <input id='discord' {...register("discord")}/>
            <span>{errors.discord?.message}</span>

            <label htmlFor='photo'>Banner da campanha</label>
            <input id='photo' {...register("photo")}/>
            <span>{errors.photo?.message}</span>

            <button type="submit">Criar</button>
        </div>
            <button onClick={()=>{setModalAddOpen(false)}}>Cancelar</button>
        </form>
    </>
)
}