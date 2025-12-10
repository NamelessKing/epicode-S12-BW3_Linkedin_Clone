/**
 * USER SLICE - Redux Toolkit
 *
 * Gestisce lo stato dell'utente corrente nell'applicazione.
 * Include il fetch automatico del profilo utente tramite thunk asincrono.
 *
 * COME USARE NEI COMPONENTI:
 * ```typescript
 * import { useAppDispatch, useAppSelector } from '../store';
 * import { fetchCurrentUser, clearUser } from '../store/userSlice';
 *
 * function MyComponent() {
 *   const dispatch = useAppDispatch();
 *   const { data, loading, error } = useAppSelector(state => state.user);
 *
 *   useEffect(() => {
 *     dispatch(fetchCurrentUser());
 *   }, []);
 *
 *   if (loading) return <div>Loading...</div>;
 *   if (error) return <div>Error: {error}</div>;
 *   if (data) return <div>Ciao {data.name}!</div>;
 * }
 * ```
 */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type {
  UserProfile,
  UpdatedUserProfile,
  UpdateProfileImage,
} from "../types/user";
import {
  fetchCurrentUserProfile,
  updateUserImage,
  updateUserProfile,
} from "../api/profileApi";

/**
 * Interfaccia dello stato utente
 * - data: profilo utente (null se non ancora caricato)
 * - loading: true durante il caricamento
 * - error: messaggio di errore se la chiamata fallisce
 */
interface UserState {
  data: UserProfile | null;
  loading: boolean;
  error: string | null;
}

/**
 * Stato iniziale dello slice
 * All'avvio l'utente non è caricato (data = null)
 */
const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

/**
 * Thunk asincrono per recuperare il profilo utente corrente
 *
 * UTILIZZO:
 * ```typescript
 * dispatch(fetchCurrentUser());
 * ```
 *
 * Gestisce automaticamente 3 stati:
 * - pending: loading = true
 * - fulfilled: salva i dati in state.data
 * - rejected: salva l'errore in state.error
 */
export const fetchCurrentUser = createAsyncThunk(
  "user/fetchCurrentUser",
  async () => {
    const response = await fetchCurrentUserProfile();
    return response;
  }
);

/**
 * Thunk per aggiornare il profilo utente corrente
 */
export const updateCurrentUser = createAsyncThunk(
  "user/updateCurrentUser",
  async (profileData: UpdatedUserProfile) => {
    const response = await updateUserProfile(profileData);
    return response;
  }
);

export const updateProfileImage = createAsyncThunk(
  "user/updateUserImage",
  async (imageToUpdate: UpdateProfileImage): Promise<UserProfile> => {
    const response = await updateUserImage(imageToUpdate);
    return response;
  }
);

/**
 * User Slice - gestisce lo stato globale dell'utente
 */
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    /**
     * Pulisce i dati utente dallo stato
     * Utile per il logout o reset dello stato
     *
     * UTILIZZO:
     * ```typescript
     * dispatch(clearUser());
     * ```
     */
    clearUser: (state) => {
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Chiamata in corso
      .addCase(fetchCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Chiamata completata con successo
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      // Chiamata fallita
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch user";
      })
      // UPDATE USER
      .addCase(updateCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(updateCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update user";
      })
    
    .addCase(updateProfileImage.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(updateProfileImage.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(updateProfileImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update image";
      })
  },
});

// Esporta le azioni
export const { clearUser } = userSlice.actions;

// Esporta il reducer
export default userSlice.reducer;
