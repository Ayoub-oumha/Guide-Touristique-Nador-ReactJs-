import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur de requête pour ajouter le token JWT
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Intercepteur de réponse pour gérer les erreurs globalement
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      const status = error.response.status;
      
      switch (status) {
        case 401:
          // Token expiré ou invalide
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          toast.error('Session expirée. Veuillez vous reconnecter.');
          window.location.href = '/login';
          break;
        case 403:
          toast.error('Accès non autorisé');
          break;
        case 404:
          toast.error('Ressource non trouvée');
          break;
        case 500:
          toast.error('Erreur serveur. Veuillez réessayer plus tard.');
          break;
        default:
          toast.error('Une erreur est survenue');
      }
    } else if (error.request) {
      toast.error('Impossible de contacter le serveur');
    }
    
    return Promise.reject(error);
  }
);

export default api;
