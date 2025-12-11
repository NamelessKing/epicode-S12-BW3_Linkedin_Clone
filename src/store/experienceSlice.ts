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
  'experience/fetchAll',
  async (userId: string) => {
    const response = await fetchAllExperiences(userId);
    return response;
  }
);

export const fetchExp = createAsyncThunk(
  'experience/fetchSingle',
  async ({
    userId,
    experienceId
  }: {
    userId: string;
    experienceId: string;
  }) => {
    const response = await fetchExperience(userId, experienceId);
    return response;
  }
);

export const createExp = createAsyncThunk(
  'expercience/create',
  async ({
    userId,
    experienceData
  }: {
    userId: string;
    experienceData: CreateExperience;
  }) => {
    const response = await createExperience(userId, experienceData);
    return response;
  }
);

export const updateExp = createAsyncThunk(
  'experience/update',
  async ({
    userId,
    experienceId,
    experienceData
  }: {
    userId: string;
    experienceId: string;
    experienceData: UpdateExperience;
  }) => {
    const response = await updateExperience(
      userId,
      experienceId,
      experienceData
    );
    return response;
  }
);

export const deleteExp = createAsyncThunk(
  'experience/delete',
  async ({
    userId,
    experienceId
  }: {
    userId: string;
    experienceId: string;
  }) => {
    const response = await deleteExperience(userId, experienceId);
    return response;
  }
);

export const updateImgExp = createAsyncThunk(
  'experience/updateImage',
  async (experienceImage: UpdateExperienceImage) => {
    const response = await updateExperienceImage(experienceImage);
    return response;
  }
);

const experienceSlice = createSlice({
  name: 'experience',
  experienceInitialState,
  reducers: {
    clearExp: (state) => {
      state.data = null;
      state.error = null;
    }
  }
});
