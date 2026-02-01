import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { login, clearError } from '../../store/slices/authSlice';
import { LoginCredentials } from '../../types/auth.types';
import './Login.css';

const schema = yup.object({
  username: yup.string().required('Le nom d\'utilisateur est requis'),
  password: yup.string().required('Le mot de passe est requis'),
}).required();

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, error, isAuthenticated } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin/dashboard');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  const onSubmit = async (data: LoginCredentials) => {
    try {
      await dispatch(login(data)).unwrap();
      toast.success('Connexion réussie !');
      navigate('/admin/dashboard');
    } catch (err) {
      // L'erreur est déjà gérée par le useEffect
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Guide Touristique Nador</h1>
          <p>Espace Administration</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="username">Nom d'utilisateur</label>
            <input
              id="username"
              type="text"
              {...register('username')}
              className={errors.username ? 'error' : ''}
              placeholder="Entrez votre nom d'utilisateur"
            />
            {errors.username && (
              <span className="error-message">{errors.username.message}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              id="password"
              type="password"
              {...register('password')}
              className={errors.password ? 'error' : ''}
              placeholder="Entrez votre mot de passe"
            />
            {errors.password && (
              <span className="error-message">{errors.password.message}</span>
            )}
          </div>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Connexion en cours...' : 'Se connecter'}
          </button>
        </form>

        <div className="demo-credentials">
          <h3>🔑 Identifiants de test</h3>
          <p>
            <strong>Username:</strong> <code>emilys</code>
          </p>
          <p>
            <strong>Password:</strong> <code>emilyspass</code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
