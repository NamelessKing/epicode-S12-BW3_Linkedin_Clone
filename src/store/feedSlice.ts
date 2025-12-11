import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { Feed } from "../types/feedPost"
import { fetchFeed, newFeedPost } from "../api/feedApi"

interface FeedState {
  data: Feed[] | null
  currentFeed: Feed | null
  loading: boolean
  error: string | null
}

const initialState: FeedState = {
  data: [],
  currentFeed: null,
  loading: false,
  error: null,
}

export const fetchFeedArray = createAsyncThunk<Feed[]>("feed", async (): Promise<Feed[]> => {
  const response = await fetchFeed()
  return response.reverse().slice(0, 29)
})

export const newFeedfn = createAsyncThunk("feed/post", async (post: string): Promise<Feed> => {
  const response = await newFeedPost(post)
  console.log("risposta andata", response)
  return response
}
)

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
        state.error = action.error.message || "Failed to fetch posts"
      })
      .addCase(newFeedfn.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(newFeedfn.fulfilled, (state, action) => {
        state.loading = false
        state.currentFeed = action.payload
      })
      .addCase(newFeedfn.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Failed to create your post"
      })
  },
})

export default feedSlice.reducer
