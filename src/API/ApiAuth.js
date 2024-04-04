import axios from 'axios';

export const authApi = axios.create({
  baseURL: 'https://watertrackerbackend-uo3w.onrender.com/api/',
});

export const signUpApi = async (body) => {
  // Код для signUpApi
};

export const loginApi = async (body) => {
  // Код для loginApi
};

export const refreshApi = async (token) => {
  try {
    const { data } = await authApi.post(
      'auth/current',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.error('Error in refreshApi:', error);
    throw error;
  }
};

export const logoutApi = async (token) => {
  try {
    const { data } = await authApi.post(
      'auth/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.error('Error in logoutApi:', error);
    throw error;
  }
};
