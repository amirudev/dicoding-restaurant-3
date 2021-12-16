import FavouriteRestaurantDB from '../src/scripts/data/favouriterestaurant-idb';
import FavoriteRestaurantSearchView from '../src/scripts/views/pages/liked-movies/favorite-restaurant-search-view';
import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/liked-movies/favorite-restaurant-search-presenter';

describe('Searhing restaurant', () => {
  let presenter;
  let view;
  let favoriteRestaurants;

  const searchRestaurants = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;

    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestaurantSearchContainer = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteRestaurants = spyOnAllFunctions(FavouriteRestaurantDB);
    presenter = new FavoriteRestaurantSearchPresenter({
      view,
      favoriteRestaurants,
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
  });

  describe('when query is not empty', () => {
    it('should be able to capture the query typed by user', () => {
      searchRestaurants('restaurant a');

      expect(presenter.latestQuery).toEqual('restaurant a');
    });

    it('should ask model to search restaurant', () => {
      searchRestaurants('restaurant a');

      expect(favoriteRestaurants.searchRestaurants).toHaveBeenCalledWith('restaurant a');
    });

    it('should show founded restaurant', () => {
      presenter._showFoundRestaurants([{ id: 1 }]);
      expect(document.querySelectorAll('.restaurant-item').length).toEqual(1);

      presenter._showFoundRestaurants([
        { id: 1, name: 'restaurant a' },
        { id: 2, name: 'restaurant b' },
        { id: 3, name: 'restaurant c' },
      ]);
      expect(document.querySelectorAll('.restaurant-item').length).toEqual(3);
    });

    it('should show the name of founded restaurant', () => {
      presenter._showFoundRestaurants([
        { id: 1, name: 'restaurant a' },
      ]);

      expect(document.querySelectorAll('.restaurant__name')[0].textContent).toEqual('restaurant a');
    });

    it('should show - when returned restaurant does not has name', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        const restaurantName = document.querySelectorAll('.restaurant__name');
        expect(restaurantName.item(0).textContent).toEqual('-');

        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('film a').and.returnValues([
        { id: 444 },
      ]);
      searchRestaurants('film a');
    });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchRestaurants(' ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('   ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('\t');
      expect(presenter.latestQuery.length).toEqual(0);
    });

    it('should show all favorite restaurants', () => {
      searchRestaurants(' ');
      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalled();
    });
  });

  describe('When no favorite restaurants could be found', () => {
    it('should show the empty messages', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant-item__not__found').length).toEqual(1);
        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('restaurants a').and.returnValues([]);

      searchRestaurants([]);
    });

    it('should not show any restaurants', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant-item').length).toEqual(0);

        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('restaurants a').and.returnValues([]);

      searchRestaurants([]);
    });
  });
});
