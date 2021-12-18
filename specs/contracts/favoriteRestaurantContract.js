const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    console.log(await favoriteRestaurant.getAllRestaurants());
    console.log(await favoriteRestaurant.getRestaurant(1));

    expect(await favoriteRestaurant.getRestaurant(1));
    expect(await favoriteRestaurant.getRestaurant(2));
    expect(await favoriteRestaurant.getRestaurant(3));
  });

  it('should refuse restaurant being added if has incorrect property', async () => {
    favoriteRestaurant.putRestaurant({ aProperty: 'aProperty' });

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([]);
  });

  it('should return all restaurant that has been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([
      { id: 1 },
      { id: 2 },
    ]);
  });

  it('should remove restaurant from list', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    favoriteRestaurant.putRestaurant({ id: 3 });

    await favoriteRestaurant.deleteRestaurant(1);

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should keep remove functionality even restaurant not exist on list', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    favoriteRestaurant.deleteRestaurant(3);

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([
      { id: 1 },
      { id: 2 },
    ]);
  });

  it('should able to search restaurant', async () => {
    favoriteRestaurant.putRestaurant({ id: 1, name: 'restaurant a' });
    favoriteRestaurant.putRestaurant({ id: 2, name: 'restaurant b' });
    favoriteRestaurant.putRestaurant({ id: 3, name: 'restaurant ac' });

    expect(await favoriteRestaurant.searchRestaurants('restaurant a')).toEqual([
      { id: 1, name: 'restaurant a' },
      { id: 3, name: 'restaurant ac' },
    ]);
  });
};

export default itActsAsFavoriteRestaurantModel;
