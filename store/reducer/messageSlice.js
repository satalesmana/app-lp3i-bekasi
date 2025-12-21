import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { supabase } from "../../lib/supabase";

export const fetchMesage = createAsyncThunk("message/fetchMessage",
  async (payload, { rejectWithValue }) => {
    try {
        const { data, error } = await supabase
            .schema('public')
            .from("message")
            .select("*")
            .order("created_at", { ascending: false })
            .limit(50);
        
        if (error) throw error;

        return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const postMesage = createAsyncThunk("message/postMessage",
  async (payload, { rejectWithValue }) => {
    const { userId, message, email } = payload;

    try {
        const data = { 
            user_id: userId,
            message: message,
            email: email
        }

       const { error } =  await supabase
            .schema('public')
            .from("message")
            .insert(data)

        if (error) throw error;

        return {message: 'message send successfully'};
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const messageSlice = createSlice({
  name: 'counter',
  initialState: {
    message: [],
    loading: false,
    error: null,
    postMessage:{
        loading: false,
        error: null
    }
  },
  reducers: {
    setMessage:(state, action) => {
      state.message = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchMesage.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchMesage.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase(fetchMesage.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(postMesage.pending, (state) => {
            state.postMessage.loading = true;
            state.postMessage.error = null;
        })
        .addCase(postMesage.fulfilled, (state, action) => {
            state.postMessage.loading = false;
        })
        .addCase(postMesage.rejected, (state, action) => {
            state.postMessage.loading = false;
        });
    }
})



export const { setMessage} = messageSlice.actions
export default messageSlice.reducer