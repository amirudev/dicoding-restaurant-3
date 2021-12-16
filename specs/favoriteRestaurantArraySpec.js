/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */

import itActsAsFavoriteRestaurantModel from './contracts/favoriteRestaurantContract';

let favoriteRestaurants = [];

const FavoriteRestaurantsArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurants.find((restaurant) => restaurant.id === restaurant);
  },

  getAllRestaurants() {
    return favoriteRestaurants;
  },

  putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    if (this.getRestaurant(restaurant.id)) {
      return;
    }

    favoriteRestaurants.push(restaurant);
  },

  deleteRestaurant(id) {
    favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id !== id);
  },

  searchRestaurant(query) {
    return this.getAllRestaurants().filter((restaurant) => {
      const loweredCaseRestaraurantTitle = (restaurant.title || '-').toLowerCase();
      const jammedRestaurantTitle = loweredCaseRestaraurantTitle.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedRestaurantTitle.indexOf(jammedQuery) !== -1;
    });
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteRestaurants = [];
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantsArray);
});
