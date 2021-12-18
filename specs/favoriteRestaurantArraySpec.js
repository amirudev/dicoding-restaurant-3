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

  searchRestaurants(query) {
    console.log('searching restaurant from array spec');
    return this.getAllRestaurants().filter((restaurant) => {
      const loweredCaseRestaraurantName = (restaurant.name || '-').toLowerCase();
      const jammedRestaurantName = loweredCaseRestaraurantName.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedRestaurantName.indexOf(jammedQuery) !== -1;
    });
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteRestaurants = [];
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantsArray);
});
