import { useAuth } from '../../hooks/useAuth';
import './DashboardPage.css';

const DashboardPage = () => {
  const { user, handleLogout } = useAuth();

  return (
    <div className="dashboard-page">
      <nav className="dashboard-nav">
        <h1>Dashboard - Guide Touristique Nador</h1>
        <div className="user-info">
          <img src={user?.image} alt={user?.firstName} className="user-avatar" />
          <span>{user?.firstName} {user?.lastName}</span>
          <button onClick={handleLogout} className="logout-btn">
            Déconnexion
          </button>
        </div>
      </nav>
      
      <div className="dashboard-content">
        <h2>Bienvenue, {user?.firstName}!</h2>
        <p>Espace d'administration en construction...</p>
      </div>
    </div>
  );
};

export default DashboardPage;
