import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type {
  Experience,
  CreateExperience,
  UpdateExperience,
  UpdateExperienceImage
} from '../types/experience';
import {
  fetchAllExperiences,
  fetchExperience,
  createExperience,
  updateExperience,
  deleteExperience,
  updateExperienceImage
} from '../api/expirienceApi';

interface ExperiencesState {
  data: Experience[];
  loading: boolean;
  error: string | null;
}

const experienceInitialState: ExperiencesState = {
  data: [],
  loading: false,
  error: null
};

export const fetchAllExp = createAsyncThunk(
  "experience/fetchAll",
  async (userId: string) => {
    const response = await fetchAllExperiences(userId);
    return response;
  }
);

export const fetchExp = createAsyncThunk(
  "experience/fetchAll",
  async ({userId, experienceId} : {userId: string, experienceId: string}) => {
    const response = await fetchExperience(userId, experienceId);
    return response;
  }
);



