const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favourite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant__name');

  const firstRestaurant = locate('.restaurant__name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  const firstRestaurantButton = locate('.visit-restaurant').first();

  I.click(firstRestaurantButton);

  // console.log(firstRestaurantName);

  // I.seeElement('#likeButton');
  // I.click('#likeButton');

  // I.amOnPage('/#/favourite');
  // I.seeElement('.restaurant-item');
  // const likedRestaurantName = await I.grabTextFrom('.restaurant__name');

  // assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
