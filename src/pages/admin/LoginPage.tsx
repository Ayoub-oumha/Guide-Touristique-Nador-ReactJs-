import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../../hooks/useAuth';
import { loginSchema } from '../../schemas/loginSchema';
import type { LoginCredentials } from '../../types/auth.types';
import './LoginPage.css';

const LoginPage = () => {
  const { handleLogin, isLoading, error } = useAuth();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginCredentials) => {
    await handleLogin(data);
  };

  return (
    <div className="login-page">
      {/* Header */}
      <header className="login-header">
        <div className="header-left">
          <svg className="logo-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
          <span className="logo-text">Guide Touristique Nador</span>
        </div>
        <div className="header-right">
          <a href="#" className="header-link">Official Website</a>
          <a href="#" className="header-link">Support</a>
        </div>
      </header>

      {/* Main Content */}
      <main className="login-main">
        <div className="login-card">
          <div className="lock-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
            </svg>
          </div>

          <h1>Welcome Back</h1>
          <p className="subtitle">Manage the Nador Tourism Experience.</p>

          {error && <div className="error-alert">{error}</div>}

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="username">Email Address</label>
              <input
                id="username"
                type="text"
                placeholder="admin@nador-tourism.ma"
                {...register('username')}
                disabled={isLoading}
              />
              {errors.username && <span className="field-error">{errors.username.message}</span>}
            </div>

            <div className="form-group">
              <div className="label-row">
                <label htmlFor="password">Password</label>
                <a href="#" className="forgot-link">Forgot Password?</a>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                {...register('password')}
                disabled={isLoading}
              />
              {errors.password && <span className="field-error">{errors.password.message}</span>}
            </div>

            <div className="remember-row">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Remember this device</span>
              </label>
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Sign In to Admin Portal'}
            </button>
          </form>

          <p className="contact-text">
            Need access? <a href="#">Contact System Admin</a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="login-footer">
        <p>© 2024 Nador Tourism Board. All administrative actions are logged.</p>
        <p className="footer-link">Mediterranean Digital Portal for Nador, Morocco.</p>
      </footer>
    </div>
  );
};

export default LoginPage;
