/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
import { openDB } from 'idb';
import CONFIG from '../global/config';

const dbPromise = openDB(CONFIG.DATABASE_NAME, CONFIG.DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(CONFIG.OBJECT_STORE_NAME, {
      keyPath: 'id',
    });
  },
});

const FavouriteRestaurantDB = {
  async getRestaurant(id) {
    if (!id) {
      return;
    }

    return (await dbPromise).get(CONFIG.OBJECT_STORE_NAME, id);
  },

  async getAllRestaurants() {
    return (await dbPromise).getAll(CONFIG.OBJECT_STORE_NAME);
  },

  async putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    return (await dbPromise).put(CONFIG.OBJECT_STORE_NAME, restaurant);
  },

  async updateRestaurant(restaurant) {
    return (await dbPromise).put(CONFIG.OBJECT_STORE_NAME, restaurant);
  },

  async deleteRestaurant(id) {
    return (await dbPromise).delete(CONFIG.OBJECT_STORE_NAME, id);
  },

  async searchRestaurants(query) {
    return (await this.getAllRestaurants()).filter((restaurant) => {
      const loweredCaseRestaraurantTitle = (restaurant.title || '-').toLowerCase();
      const jammedRestaurantTitle = loweredCaseRestaraurantTitle.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedRestaurantTitle.indexOf(jammedQuery) !== -1;
    });
  },
};

export default FavouriteRestaurantDB;
