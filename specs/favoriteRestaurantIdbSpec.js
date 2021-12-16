import FavouriteRestaurantDB from '../src/scripts/data/favouriterestaurant-idb';
import itActsAsFavoriteRestaurantModel from './contracts/favoriteRestaurantContract';

describe('Favorite Restaurant IDB Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavouriteRestaurantDB.getAllRestaurants()).forEach(async (restaurant) => {
      await FavouriteRestaurantDB.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavouriteRestaurantDB);
});
