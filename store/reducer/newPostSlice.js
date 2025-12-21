import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { supabase } from '../../lib/supabase';

export const addNewPost = createAsyncThunk('new_post/add', async (payload, { rejectWithValue }) => {
  try {
    const { error } = await supabase.schema('public').from('new_post').insert(payload);

    if (error) {
      console.log('error', error);
      throw error;
    }

    return { message: 'message send successfully' };
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

export const fetchPosts = createAsyncThunk('new_post/fetch', async (_, { rejectWithValue }) => {
  try {
    const { data, error } = await supabase.from('new_post').select('*').is('parent_id', null).order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

export const fetchPostDetail = createAsyncThunk('new_post/detail', async (id, { rejectWithValue }) => {
  try {
    const { data, error } = await supabase.from('new_post').select('*').eq('id', id).single();

    if (error) throw error;
    return data;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

export const fetchReplies = createAsyncThunk('new_post/replies', async (id, { rejectWithValue }) => {
  try {
    const { data, error } = await supabase.from('new_post').select('*').eq('parent_id', id).order('created_at');

    if (error) throw error;
    return data;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

export const postSlice = createSlice({
  name: 'new_post',
  initialState: {
    loading: false,
    error: null,
    message: null,
    submitSuccess: false, // 🟢 TAMBAH INI
    posts: [],
    selectedPost: null,
    replies: [],
    formInput: {
      post: '',
      img: '',
      created_by: {
        email: '',
        name: '',
      },
    },
  },
  reducers: {
    setPost: (state, action) => {
      state.formInput.post = action.payload;
    },
    setImage: (state, action) => {
      state.formInput.img = action.payload;
    },
    setCreatedBy: (state, action) => {
      state.formInput.created_by = { ...state.formInput.created_by, ...action.payload };
    },
    addPostRealtime: (state, action) => {
      const post = action.payload;

      // post utama
      if (!post.parent_id) {
        state.posts.unshift(post);
      }

      // reply
      if (post.parent_id === state.selectedPost?.id) {
        const exists = state.replies.some((r) => r.id === post.id);
        if (!exists) {
          state.replies.push(post);
        }
      }
    },
    resetSubmitStatus: (state) => {
      state.submitSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addNewPost.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.submitSuccess = false;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.submitSuccess = true; // 🟢 KUNCI
      })
      .addCase(addNewPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.submitSuccess = false;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(fetchPostDetail.fulfilled, (state, action) => {
        state.selectedPost = action.payload;
      })
      .addCase(fetchReplies.fulfilled, (state, action) => {
        state.replies = action.payload;
      });
  },
});

export const { setPost, setImage, setCreatedBy, addPostRealtime, resetSubmitStatus } = postSlice.actions;
export default postSlice.reducer;
