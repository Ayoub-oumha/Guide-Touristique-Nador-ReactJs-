import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/admin/LoginPage';
import DashboardPage from '../pages/admin/DashboardPage';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Route par défaut */}
      <Route path="/" element={<Navigate to="/admin/login" replace />} />
      
      {/* Routes Admin */}
      <Route path="/admin/login" element={<LoginPage />} />
      
      {/* Routes protégées */}
      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />

      {/* Route 404 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
