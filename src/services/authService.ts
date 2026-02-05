import { authAPI } from './api';
import type { LoginCredentials, AuthResponse } from '../types/auth.types';

export const authService = {
  // Connexion
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await authAPI.post<AuthResponse>('/auth/login', credentials);
    return response.data;
  },

  // Récupérer l'utilisateur actuel (avec le token)
  getCurrentUser: async (token: string): Promise<AuthResponse> => {
    const response = await authAPI.get<AuthResponse>('/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },

  // Rafraîchir le token
  refreshToken: async (refreshToken: string): Promise<AuthResponse> => {
    const response = await authAPI.post<AuthResponse>('/auth/refresh', {
      refreshToken,
      expiresInMins: 60,
    });
    return response.data;
  },
};
