import { BEARER_TOKENS } from "./constants";

// Tipo per i nomi utente validi
export type UserName = keyof typeof BEARER_TOKENS;

// Chiave localStorage
const STORAGE_KEY = "activeUser";

/**
 * Ottiene il token attivo dal localStorage
 * @returns Bearer token dell'utente attivo o null se non autenticato
 */
export const getActiveToken = (): string | null => {
  const activeUser = localStorage.getItem(STORAGE_KEY) as UserName | null;
  if (!activeUser || !(activeUser in BEARER_TOKENS)) {
    return null;
  }
  return BEARER_TOKENS[activeUser];
};

/**
 * Ottiene il nome utente attivo
 * @returns Nome utente o null se non autenticato
 */
export const getActiveUser = (): UserName | null => {
  const activeUser = localStorage.getItem(STORAGE_KEY) as UserName | null;
  if (!activeUser || !(activeUser in BEARER_TOKENS)) {
    return null;
  }
  return activeUser;
};

/**
 * Imposta l'utente attivo nel localStorage
 * @param userName Nome utente da impostare come attivo
 */
export const setActiveUser = (userName: UserName): void => {
  localStorage.setItem(STORAGE_KEY, userName);
};

/**
 * Rimuove l'utente attivo dal localStorage (logout)
 */
export const clearActiveUser = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};

/**
 * Verifica se l'utente è autenticato
 * @returns true se esiste un utente attivo valido
 */
export const isAuthenticated = (): boolean => {
  return getActiveToken() !== null;
};

/**
 * Ottiene tutti i nomi utente disponibili
 * @returns Array di nomi utente
 */
export const getAvailableUsers = (): UserName[] => {
  return Object.keys(BEARER_TOKENS) as UserName[];
};
