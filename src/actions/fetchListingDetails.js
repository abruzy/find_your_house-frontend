import axios from 'axios';
import { getListing, fetchListingError } from '.';

const url = id => `https://findhouse-app-api.herokuapp.com/listings/${id}`;

export const fetchListingDetails = id => dispatch => {
  const token = localStorage.getItem('token');

  axios.get(
    url(id),
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    { withCredentials: true },
  ).then(res => {
    dispatch(getListing(res.data));
  }).catch(err => {
    dispatch(fetchListingError(err.message));
  });
};

export default fetchListingDetails;
