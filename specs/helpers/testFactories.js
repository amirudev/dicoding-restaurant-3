import FavouriteRestaurantDB from '../../src/scripts/data/favouriterestaurant-idb';
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createFavoriteButtonPresenterRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButton'),
    favoriteRestaurant: FavouriteRestaurantDB,
    restaurant,
  });
};

const createNull = () => null;

export { createFavoriteButtonPresenterRestaurant, createNull };
