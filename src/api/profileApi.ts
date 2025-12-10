/**
 * API CLIENT PER LINKEDIN CLONE
 *
 * Questo file gestisce tutte le chiamate API per i profili utente.
 * Base URL: https://striveschool-api.herokuapp.com/api
 * Autenticazione: Bearer Token (configurato in config/constants.ts)
 */

import { API_BASE_URL, ACTIVE_TOKEN } from "../config/constants";
import type { UpdatedUserProfile, UserProfile } from "../types/user";

/**
 * HTTP Client generico per le chiamate API
 * Aggiunge automaticamente:
 * - Bearer Token per l'autenticazione
 * - Content-Type: application/json
 * - Gestione errori HTTP
 *
 * @param endpoint - L'endpoint API (es: '/profile/me')
 * @param method - Metodo HTTP (GET, POST, PUT, DELETE)
 * @param body - Dati da inviare (opzionale)
 * @returns Promise con i dati JSON della risposta
 */
const httpClient = async (
  endpoint: string,
  method: string = "GET",
  body?: object
) => {
  const url = `${API_BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${ACTIVE_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

/**
 * Recupera il profilo dell'utente corrente (autenticato)
 * Endpoint: GET /profile/me
 *
 * COME USARE:
 * ```typescript
 * import { fetchCurrentUserProfile } from './api/profileApi';
 *
 * const myProfile = await fetchCurrentUserProfile();
 * console.log(myProfile.name, myProfile.surname);
 * ```
 *
 * @returns Promise con i dati del profilo utente corrente
 */
export const fetchCurrentUserProfile = async (): Promise<UserProfile> => {
  return httpClient("/profile/me");
};

/**
 * Recupera la lista di tutti i profili utente
 * Endpoint: GET /profile/
 *
 * COME USARE:
 * ```typescript
 * import { fetchAllProfiles } from './api/profileApi';
 *
 * const allUsers = await fetchAllProfiles();
 * allUsers.forEach(user => console.log(user.name));
 * ```
 *
 * @returns Promise con array di profili utente
 */
export const fetchAllProfiles = async (): Promise<UserProfile[]> => {
  return httpClient("/profile/");
};

/**
 * Recupera un profilo utente specifico tramite ID
 * Endpoint: GET /profile/:userId
 *
 * COME USARE:
 * ```typescript
 * import { fetchUserProfile } from './api/profileApi';
 *
 * const user = await fetchUserProfile('5d84937322b7b54d848eb41b');
 * console.log(user.name, user.bio);
 * ```
 *
 * @param userId - L'ID dell'utente da recuperare
 * @returns Promise con i dati del profilo richiesto
 */
export const fetchUserProfile = async (
  userId: string
): Promise<UserProfile> => {
  return httpClient(`/profile/${userId}`);
};

/**
 * Aggiorna il profilo dell'utente corrente
 * Endpoint: PUT /profile/
 *
 * COME USARE:
 * ```typescript
 * import { updateUserProfile } from './api/profileApi';
 *
 * const updatedProfile = await updateUserProfile({
 *   name: 'Mario',
 *   surname: 'Rossi',
 *   bio: 'Full Stack Developer',
 *   title: 'Senior Developer'
 * });
 * ```
 *
 * @param profileData - Dati parziali del profilo da aggiornare
 * @returns Promise con il profilo aggiornato
 */
export const updateUserProfile = async (
  profileData: UpdatedUserProfile
): Promise<UserProfile> => {
  return httpClient("/profile/", "PUT", profileData);
};
