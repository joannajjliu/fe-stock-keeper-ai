import axios from 'axios';

export const getRoomData = (): any => {
  return axios.get('https://6057fefac3f49200173ad2e0.mockapi.io/room/4').then((response) => response.data);
};
