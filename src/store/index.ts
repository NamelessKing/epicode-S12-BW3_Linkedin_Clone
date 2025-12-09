/**
 * REDUX STORE - Configurazione principale
 *
 * Questo file configura lo store Redux e fornisce hooks tipizzati
 * per TypeScript da usare in tutti i componenti.
 *
 * COME USARE NEI COMPONENTI:
 * ```typescript
 * import { useAppDispatch, useAppSelector } from './store';
 * import { fetchCurrentUser } from './store/userSlice';
 *
 * function MyComponent() {
 *   --Hook tipizzati per dispatch e selector
 *   const dispatch = useAppDispatch();
 *   const user = useAppSelector(state => state.user);
 *
 *   --Dispatch di azioni
 *   useEffect(() => {
 *     dispatch(fetchCurrentUser());
 *   }, []);
 *
 *   return <div>{user.data?.name}</div>;
 * }
 * ```
 */

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import userReducer from "./userSlice";

/**
 * Configurazione dello store Redux
 * Combina tutti i reducers dell'applicazione
 *
 * Struttura dello state:
 * - state.user: dati utente corrente (UserProfile)
 */
export const store = configureStore({
  reducer: {
    user: userReducer,
    // Aggiungi qui altri reducers per D2-D4:
    // posts: postsReducer,
    // experiences: experiencesReducer,
  },
});

/**
 * Tipo TypeScript dello stato globale
 * Inferito automaticamente dalla configurazione dello store
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * Tipo TypeScript del dispatch
 * Include il supporto per thunk asincroni
 */
export type AppDispatch = typeof store.dispatch;

/**
 * Hook tipizzato per il dispatch
 * Usa questo invece di useDispatch() standard
 *
 * ESEMPIO:
 * ```typescript
 * const dispatch = useAppDispatch();
 * dispatch(fetchCurrentUser());
 * ```
 */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

/**
 * Hook tipizzato per i selectors
 * Usa questo invece di useSelector() standard
 * Fornisce autocompletamento TypeScript per lo state
 *
 * ESEMPIO:
 * ```typescript
 * const userName = useAppSelector(state => state.user.data?.name);
 * const isLoading = useAppSelector(state => state.user.loading);
 * ```
 */
export const useAppSelector = useSelector.withTypes<RootState>();
