import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .required('Le nom d\'utilisateur est requis')
    .min(3, 'Le nom d\'utilisateur doit contenir au moins 3 caractères'),
  password: yup
    .string()
    .required('Le mot de passe est requis')
    .min(4, 'Le mot de passe doit contenir au moins 4 caractères'),
});
