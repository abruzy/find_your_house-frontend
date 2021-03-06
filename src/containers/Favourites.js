import React, { useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import Proptypes from 'prop-types';
import Loader from 'react-loader-spinner';
import Navbar from '../components/Navbar';
import { fetchFavourites } from '../actions/favourites';
import FavouriteListingItem from '../components/FavouriteListingItem';
import { clearListing, removeErrors } from '../actions';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Spacer from '../components/Spacer';

import '../styles/Favourites.css';

const Favourites = ({ favourites, listings }) => {
  const dispatch = useDispatch();

  const error = useSelector(store => store.error);
  const { fetchFavouritesError } = error;

  const errorCheck = Object.keys(error).length;
  const favCheck = Object.keys(favourites).length;

  useEffect(() => {
    dispatch(removeErrors());
  }, [errorCheck, dispatch]);

  useEffect(() => {
    fetchFavourites()(dispatch);
    if (listings.listing.data.id) {
      dispatch(clearListing());
    }
  }, [favCheck, listings.listing.data.id, dispatch]);

  /* eslint-disable no-nested-ternary */
  return (
    <div>
      <Navbar />
      <Spacer />
      <div className="favourite-listings-list">
        {
          fetchFavouritesError
          && (
          <div className="error">
            {fetchFavouritesError}
            <p>Please try reloading the page</p>
          </div>
          )
        }
        {
          favourites.favourites ? (
            favourites.favourites.length > 0 ? (
              favourites.favourites.map(listing => (
                <FavouriteListingItem key={listing.id} listing={listing} />
              ))
            ) : (
              <div>
                No favourites found
                <br />
                {' '}
                You can find listings on the Home page and add them to this list
              </div>
            )
          ) : (
            <div className="loader-wrap">
              <Loader
                type="Oval"
                color="rgb(255, 75, 4)"
              />
            </div>
          )
        }
      </div>
    </div>
  );
};

const mapStateToProps = ({ favourites, listings }) => ({
  favourites,
  listings,
});

Favourites.propTypes = {
  favourites: Proptypes.instanceOf(Object).isRequired,
  listings: Proptypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps)(Favourites);
