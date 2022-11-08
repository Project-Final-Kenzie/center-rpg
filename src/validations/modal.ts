import * as yup from 'yup';

export const modalSchema = yup.object().shape({
    description: yup.string(),
    title: yup.string().required('Nome é obrigatório'),
    duration: yup.string().required('Duração é obrigatório').oneOf(["curta","media","longa"]),
    environment: yup.string().required('Ambientação é obrigatório'),
    discord: yup.string().required('Discord é obrigatório'),
    photo: yup.string().required('Imagem é obrigatória'),
})