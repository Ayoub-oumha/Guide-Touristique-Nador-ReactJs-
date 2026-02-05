import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { authService } from '../../services/authService';
import { tokenUtils } from '../../utils/token';
import type { AuthState, LoginCredentials, AuthResponse, User } from '../../types/auth.types';

// État initial
const initialState: AuthState = {
  user: tokenUtils.getUser() as User | null,
  token: tokenUtils.getToken(),
  isAuthenticated: tokenUtils.isAuthenticated(),
  isLoading: false,
  error: null,
};

// Thunk pour la connexion
export const login = createAsyncThunk<
  AuthResponse,
  LoginCredentials,
  { rejectValue: string }
>(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await authService.login(credentials);
      
      // Sauvegarder le token et l'utilisateur
      tokenUtils.setToken(response.token);
      tokenUtils.setUser({
        id: response.id,
        username: response.username,
        email: response.email,
        firstName: response.firstName,
        lastName: response.lastName,
        gender: response.gender,
        image: response.image,
      });

      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || 'Identifiants incorrects. Veuillez réessayer.'
      );
    }
  }
);

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      tokenUtils.clearAuth();
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = {
          id: action.payload.id,
          username: action.payload.username,
          email: action.payload.email,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          gender: action.payload.gender,
          image: action.payload.image,
        };
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = action.payload || 'Une erreur est survenue';
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
