import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URI,
  params: {},
});

if (import.meta.env.DEV) {
  api.interceptors.response.use(
    response => response,
    error => {
      // eslint-disable-next-line no-console
      console.info({
        message: error?.message ?? 'Internal server error',
        error,
      });

      return Promise.reject(error);
    },
  );
}

export default api;
