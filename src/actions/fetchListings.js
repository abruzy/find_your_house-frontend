import axios from 'axios';
import { getListings, fetchListingsError } from '.';

const url = 'http://localhost:3001/listings';

export const fetchListings = () => dispatch => {
  const token = localStorage.getItem('token');

  axios.get(
    url,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    { withCredentials: true },
  ).then(res => {
    dispatch(getListings(res.data));
  }).catch(err => {
    dispatch(fetchListingsError(err.message));
  });
};

export default fetchListings;
