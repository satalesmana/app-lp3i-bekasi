import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { supabase } from "../../lib/supabase";

export const addNewPost = createAsyncThunk(
  "new_post/add",
  async (payload, { rejectWithValue }) => {
    try {
      const { error } = await supabase
        .from("new_post")
        .insert(payload);

      if (error) throw error;

      return payload;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);



export const postSlice = createSlice({
  name: 'new_post',
initialState: {
  loading: false,
  error: null,
  message: null,
  posts: [], // ⬅️ WAJIB
  formInput:{
    post: '',
    img: '',
    created_by:{
      email: '',
      name: '',
    }
  }
},
  reducers: {
    setPost:(state, action) => {
      state.formInput.post = action.payload
    },
    setImage:(state, action) => {
      state.formInput.img = action.payload
    },
    setCreatedBy:(state, action) => {
      state.formInput.created_by = {...state.formInput.created_by, ...action.payload }
    }
    
  },
  extraReducers: (builder) => {
    builder
    .addCase(addNewPost.fulfilled, (state, action) => {
      state.loading = false;
      state.message = "Post berhasil ditambahkan";
      state.posts.unshift(action.payload); // ⬅️ INI KUNCINYA
})
  resetForm:(state) => {
  state.formInput = {
    post: '',
    img: '',
    created_by: {
      email: '',
      name: '',
    }
  }
}
  }
})

export const { setPost, setImage, setCreatedBy, resetForm } = postSlice.actions;
export default postSlice.reducer