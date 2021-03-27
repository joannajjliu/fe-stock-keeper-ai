import axios from 'axios';

//TODO: substitute in for live API:
//  https://stockkeeperh4g2021.azurewebsites.net/lastState

// previous API: https://6057fefac3f49200173ad2e0.mockapi.io/room/4

export const getRoomData = (): any => {
  return axios.get('https://stockkeeperh4g2021.azurewebsites.net/lastState').then((response) => response.data);
};
