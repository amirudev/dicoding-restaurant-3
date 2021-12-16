class FavoriteRestaurantSearchPresenter {
  constructor({ view, favoriteRestaurants }) {
    this._view = view;
    this._favoriteRestaurants = favoriteRestaurants;
    this._listenToSearchUserByRequest();
  }

  _showFoundRestaurants(restaurants) {
    this._view.showFavoriteRestaurants(restaurants);
  }

  async _searchRestaurants(latestQuery) {
    this._latestQuery = latestQuery.trim();

    let foundRestaurants;

    if (this._latestQuery.length > 0) {
      foundRestaurants = await this._favoriteRestaurants.searchRestaurants(this._latestQuery);
    } else {
      foundRestaurants = await this._favoriteRestaurants.getAllRestaurants();
    }

    this._showFoundRestaurants(foundRestaurants);
  }

  _listenToSearchUserByRequest() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchRestaurants(latestQuery);
    });
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestaurantSearchPresenter;
