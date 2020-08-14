import axios from 'axios';
import { getListing, fetchListingError } from '.';

const url = id => `https://localhost:3001/listings/${id}`;

export const fetchListingDetails = id => dispatch => {
  const token = localStorage.getItem('token');

  axios.get(
    url(id),
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  ).then(res => {
    dispatch(getListing(res.data));
  }).catch(err => {
    dispatch(fetchListingError(err.message));
  });
};

export default fetchListingDetails;
