import FavouriteRestaurantDB from '../src/scripts/data/favouriterestaurant-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButton"></div>';
};

describe('Unliking Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavouriteRestaurantDB.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavouriteRestaurantDB.deleteRestaurant(1);
  });

  it('should display unlike button when restaurant has been liked', async () => {
    await TestFactories.createFavoriteButtonPresenterRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it('should not display like button when restaurant has been liked', async () => {
    await TestFactories.createFavoriteButtonPresenterRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it('should be remove restaurant from liked list when unlike button clicked', async () => {
    await TestFactories.createFavoriteButtonPresenterRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavouriteRestaurantDB.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if restaurant id not exist on liked restaurant', async () => {
    await TestFactories.createFavoriteButtonPresenterRestaurant({ id: 1 });

    FavouriteRestaurantDB.deleteRestaurant(1);

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavouriteRestaurantDB.getAllRestaurants()).toEqual([]);
  });
});
