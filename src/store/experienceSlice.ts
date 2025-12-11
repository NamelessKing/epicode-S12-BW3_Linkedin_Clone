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
  initialState: experienceInitialState,
  reducers: {
    clearExp: (state) => {
      state.data = [];
      state.error = null;
    }
  },
extraReducers: (builder) => {
    builder
        //fetch GET All
        .addCase(fetchAllExp.pending, (state) => {
            state.loading = true;
            state.error = null
        })
        .addCase(fetchAllExp.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload
        })
        .addCase(fetchAllExp.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Failed to fetch experiences"
        })
        //fetch GET singola
        .addCase(fetchExp.pending, (state) => {
            state.loading = true;
            state.error = null
        })
        .addCase(fetchExp.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload
        })
        .addCase(fetchExp.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Failed to fetch experience"
        })
        // fetch POST
        .addCase(createExp.pending, (state) => {
            state.loading = true;
            state.error = null
        })
        .addCase(createExp.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload
        })
        .addCase(createExp.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Failed to fetch experience"
        })
        // fetch PUT
        .addCase(updateExp.pending, (state) => {
            state.loading = true;
            state.error = null
        })
        .addCase(updateExp.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload
        })
        .addCase(updateExp.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Failed to fetch experience"
        })
        // fetch DELETE
        .addCase(deleteExp.pending, (state) => {
            state.loading = true;
            state.error = null
        })
        .addCase(deleteExp.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload
        })
        .addCase(deleteExp.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Failed to fetch experience"
        })
        //fetch img
        .addCase(updateImgExp.pending, (state, action) => {
            state.loading = true;
            state.data = action.payload
        })
        .addCase(updateImgExp.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload
        })
        .addCase(updateImgExp.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Failed to fetch experience"
        })
}
});

export const { clearExp } = experienceSlice.actions;

