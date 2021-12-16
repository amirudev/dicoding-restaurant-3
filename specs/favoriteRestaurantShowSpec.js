/* eslint-disable no-new */
import FavouriteRestaurantDB
  from '../src/scripts/data/favouriterestaurant-idb';
// import FavoriteRestaurantSearchPresenter
//   from '../src/scripts/views/pages/liked-movies/favorite-restaurant-search-presenter';
import FavoriteRestaurantSearchView
  from '../src/scripts/views/pages/liked-movies/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter
  from '../src/scripts/views/pages/liked-movies/favorite-restaurant-show-presenter';

describe('showing all favorite restaurant', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('when no restaurant has been liked', () => {
    it('should ask for favorite restaurants', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavouriteRestaurantDB);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
    });

    it('should show information that no restaurant has been liked', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelector('.restaurant-item__not__found')).toBeTruthy();
        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavouriteRestaurantDB);
      favoriteRestaurants.getAllRestaurants.and.returnValue([]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });

  describe('when favorite restaurants exist', () => {
    it('should show restaurants', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant-item').length).toEqual(2);
        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavouriteRestaurantDB);
      favoriteRestaurants.getAllRestaurants.and.returnValue([
        { id: 1, name: 'restaurant a' },
        { id: 2, name: 'restaurant b' },
      ]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
});
