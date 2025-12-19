import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { supabase } from "../../lib/supabase";

export const addNewPost = createAsyncThunk("new_post/add",
  async (payload, { rejectWithValue }) => {
    try {
       const { error } =  await supabase
            .schema('public')
            .from("new_post")
            .insert(payload)

        if (error){
            console.log('error', error)
            throw error;
        } 

        return { message: 'message send successfully' };
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
        .addCase(addNewPost.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(addNewPost.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase(addNewPost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
  }
})

export const { setPost, setImage, setCreatedBy } = postSlice.actions
export default postSlice.reducer