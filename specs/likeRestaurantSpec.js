import FavouriteRestaurantDB from '../src/scripts/data/favouriterestaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButton"></div>';
  };

  beforeEach(() => {
    addFavoriteButtonContainer();
  });

  it('should show the favorite button when the restaurant has not been favorited yet', async () => {
    await TestFactories.createFavoriteButtonPresenterRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('should not show the favorite button when the restaurant has been favorited', async () => {
    await TestFactories.createFavoriteButtonPresenterRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('like button functionality', async () => {
    await TestFactories.createFavoriteButtonPresenterRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    await FavouriteRestaurantDB.putRestaurant({ id: 1 });
    const restaurant = await FavouriteRestaurantDB.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    FavouriteRestaurantDB.deleteRestaurant(1);
  });

  it('should not add restaurant when has been liked', async () => {
    await TestFactories.createFavoriteButtonPresenterRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavouriteRestaurantDB.getAllRestaurants()).toEqual([{ id: 1 }]);

    FavouriteRestaurantDB.deleteRestaurant(1);
  });

  it('should not add restaurant if has no id', async () => {
    await TestFactories.createFavoriteButtonPresenterRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavouriteRestaurantDB.getAllRestaurants()).toEqual([]);
  });
});
