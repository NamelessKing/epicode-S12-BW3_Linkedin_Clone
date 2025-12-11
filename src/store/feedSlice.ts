import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { feedArray } from "../types/feedPost"
import { fetchFeed } from "../api/feedApi"

interface FeedState {
  data: feedArray[] | null
  loading: boolean
  error: string | null
}

const initialState: FeedState = {
  data: [],
  loading: false,
  error: null,
}

export const fetchFeedArray = createAsyncThunk<feedArray[]>("feed", async (): Promise<feedArray[]> => {
  const response = await fetchFeed()
  return response
})

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeedArray.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchFeedArray.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchFeedArray.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Failed to update image"
      })
  },
})

export default feedSlice.reducer
