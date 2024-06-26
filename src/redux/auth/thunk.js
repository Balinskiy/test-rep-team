import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginApi, refreshApi, signUpApi, logoutApi } from '../../API/ApiAuth';


export const signUpThunk = createAsyncThunk('auth/signUp', async (body, { rejectWithValue }) => {
	try {
		const user = await signUpApi(body);
		const logInUser = await loginApi(user)
		return logInUser
	} catch (error) {
		return rejectWithValue(error.response.data.error)
	}

})

export const loginThunk = createAsyncThunk('auth/login', async (body, { rejectWithValue }) => {
	try {
		return await loginApi(body)
	} catch (error) {
		console.log(error.response.data.error);
		return rejectWithValue(error.response.data.error)
	}
})

export const refreshThunk = createAsyncThunk(
	'auth/refresh',
	async (_, { rejectWithValue, getState }) => {
		try {
			return await refreshApi(getState().auth.token)
		} catch (error) {
			return rejectWithValue(error.response.data.error)
		}
	}
)

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      await logoutApi(token);
      return null;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);