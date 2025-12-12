import type {
  UpdateExperienceImage,
  UpdateExperience,
  CreateExperience,
  Experience,
} from "../types/experience";
import { httpClient } from "./profileApi";
import { API_BASE_URL } from "../config/constants";
import { getActiveToken } from "../config/auth";

// - PUT https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId // Modifica una specifica experience
// - DELETE https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId // Elimina una specifica experience

export const fetchAllExperiences = async (
  userId: string
): Promise<Experience[]> => {
  return httpClient(`/profile/${userId}/experiences/`);
};

export const createExperience = async (
  userId: string,
  experienceData: CreateExperience
): Promise<Experience> => {
  return httpClient(`/profile/${userId}/experiences/`, "POST", experienceData);
};

export const fetchExperience = async (
  userId: string,
  experienceId: string
): Promise<Experience> => {
  return httpClient(`/profile/${userId}/experiences/${experienceId}`);
};

export const updateExperience = async (
  userId: string,
  experienceId: string,
  experienceData: UpdateExperience
): Promise<Experience> => {
  return httpClient(
    `/profile/${userId}/experiences/${experienceId}`,
    "PUT",
    experienceData
  );
};

export const deleteExperience = async (
  userId: string,
  experienceId: string
): Promise<void> => {
  return httpClient(`/profile/${userId}/experiences/${experienceId}`, "DELETE");
};

export const updateExperienceImage = async (
  experienceImage: UpdateExperienceImage
): Promise<Experience> => {
  const token = getActiveToken();

  if (!token) {
    throw new Error("No active token found. Please login.");
  }

  const formData = new FormData();
  formData.append("experience", experienceImage.image!);

  const url = `${API_BASE_URL}/profile/${experienceImage.userId}/experiences/${experienceImage.experienceId}/picture`;
  const response = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
  if (!response.ok) {
    // const errorText = await response.text()
    throw new Error(`Errore nella fetch, status code: ${response.status}`);
  }

  return response.json();
};
