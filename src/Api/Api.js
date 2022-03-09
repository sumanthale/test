import axios from 'axios';
const api = axios.create({
  baseURL: 'https://solona-buddha-default-rtdb.firebaseio.com/mints',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

export default api;

export const deleteMint = async (pk) => {
  try {
    const response = await api.delete(`/${pk}.json`);

    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const createOrEditMint = async (mint) => {
  try {
    const response = await api.put('.json', mint);

    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const patchMint = async (mint) => {
  try {
    const response = await api.patch('.json', mint);

    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const getMint = async (pk) => {
  try {
    const response = await api.get(`/${pk}.json`);

    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
export const getMints = async () => {
  try {
    const response = await api.get(`.json`);

    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
