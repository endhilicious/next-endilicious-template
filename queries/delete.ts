import axios from 'axios';

const API_URL = 'something-api-here';

const deleteApi = async () => {
  try {
    const response = await axios.delete(API_URL);

    return response
  } catch (error) {
    return error;
  }
}

export default deleteApi;
