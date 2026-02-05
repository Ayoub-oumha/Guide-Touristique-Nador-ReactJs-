const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';

export const tokenUtils = {
  // Sauvegarder le token
  setToken: (token: string): void => {
    localStorage.setItem(TOKEN_KEY, token);
  },

  // Récupérer le token
  getToken: (): string | null => {
    return localStorage.getItem(TOKEN_KEY);
  },

  // Supprimer le token
  removeToken: (): void => {
    localStorage.removeItem(TOKEN_KEY);
  },

  // Sauvegarder l'utilisateur
  setUser: (user: object): void => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  // Récupérer l'utilisateur
  getUser: (): object | null => {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  },

  // Supprimer l'utilisateur
  removeUser: (): void => {
    localStorage.removeItem(USER_KEY);
  },

  // Vérifier si l'utilisateur est authentifié
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem(TOKEN_KEY);
  },

  // Nettoyer toutes les données d'authentification
  clearAuth: (): void => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },
};
