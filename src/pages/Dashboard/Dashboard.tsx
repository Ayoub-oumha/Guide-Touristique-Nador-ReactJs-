import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logout } from '../../store/slices/authSlice';
import { toast } from 'react-toastify';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    toast.info('Vous avez été déconnecté');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>📍 Guide Touristique Nador - Administration</h1>
          <div className="header-right">
            {user && (
              <div className="user-info">
                <img 
                  src={user.image} 
                  alt={user.username} 
                  className="user-avatar"
                />
                <div className="user-details">
                  <span className="user-name">
                    {user.firstName} {user.lastName}
                  </span>
                  <span className="user-email">{user.email}</span>
                </div>
              </div>
            )}
            <button onClick={handleLogout} className="logout-button">
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      <div className="dashboard-content">
        <div className="welcome-section">
          <h2>Bienvenue, {user?.firstName} ! 👋</h2>
          <p>Tableau de bord de gestion du Guide Touristique de Nador</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-header">
              <div className="stat-content">
                <h3>Total des lieux</h3>
                <div className="stat-value">0</div>
              </div>
              <div className="stat-icon blue">📍</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <div className="stat-content">
                <h3>Lieux actifs</h3>
                <div className="stat-value">0</div>
              </div>
              <div className="stat-icon green">✓</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <div className="stat-content">
                <h3>Lieux inactifs</h3>
                <div className="stat-value">0</div>
              </div>
              <div className="stat-icon orange">⏸</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <div className="stat-content">
                <h3>Abonnés newsletter</h3>
                <div className="stat-value">0</div>
              </div>
              <div className="stat-icon purple">📧</div>
            </div>
          </div>
        </div>

        <div className="actions-section">
          <h3>Actions rapides</h3>
          <div className="actions-grid">
            <button className="action-button">
              ➕ Ajouter un lieu
            </button>
            <button className="action-button">
              📋 Voir tous les lieux
            </button>
            <button className="action-button">
              📊 Statistiques
            </button>
            <button className="action-button">
              ⚙️ Paramètres
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
