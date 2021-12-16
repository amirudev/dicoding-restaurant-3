/* eslint-disable no-new */
// import FavouriteRestaurantDB from '../../data/favouriterestaurant-idb';
// import { createRestaurantItemTemplate } from '../templates/template-creator';
import FavouriteRestaurantDB from '../../data/favouriterestaurant-idb';
import FavoriteRestaurantSearchPresenter from './liked-movies/favorite-restaurant-search-presenter';
import FavoriteRestaurantSearchView from './liked-movies/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './liked-movies/favorite-restaurant-show-presenter';

const view = new FavoriteRestaurantSearchView();

const Favourite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    // const restaurants = await FavouriteRestaurantDB.getAllRestaurants();
    // const restaurantContainer = document.querySelector('#restaurant-list');
    // restaurants.forEach((restaurant) => {
    //   restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    // });
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavouriteRestaurantDB });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavouriteRestaurantDB });
  },
};

export default Favourite;
