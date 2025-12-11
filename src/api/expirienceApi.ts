import type { Experience } from "../types/experience";
import { httpClient } from "./profileApi";

// - PUT https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId // Modifica una specifica experience
// - DELETE https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId // Elimina una specifica experience

export const fetchAllExperiences = async (userId: string): Promise<Experience[]> => {
  return httpClient(`/profile/${userId}/experiences/`);
};

export const createExperience = async (userId: string, experienceData: Partial<Experience>
): Promise<Experience> => {
  return httpClient(`/profile/${userId}/experiences/`, 'POST', experienceData);
};

export const fetchExperience = async (userId: string, experienceId: string): Promise<Experience> => {
  return httpClient(`/profile/${userId}/experiences/${experienceId}`);
};

export const updateExperience = async (userId: string, experienceId: string, experienceData: Partial<Experience>
): Promise<Experience> => {
  return httpClient(`/profile/${userId}/experiences/${experienceId}`, 'PUT', experienceData);
};
