import axios from 'axios';

const API_URL = 'something-api-here';

const read = async () => {
  try {
    const response = await axios.get(API_URL);

    return response.data
  } catch (error) {
    return error;
  }
}

export default read;
