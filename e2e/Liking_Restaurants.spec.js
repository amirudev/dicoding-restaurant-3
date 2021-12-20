/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
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

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.seeElement('.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant__name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('searching restaurants', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');
  I.seeElement('.restaurant-item');

  const titles = [];
  for (let i = 1; i <= 3; i++) {
    I.click(locate('.visit-restaurant').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    titles.push(await I.grabTextFrom('.restaurant__name'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favourite');
  I.seeElement('#query');

  const searchQuery = titles[1].substring(1, 3);
  const matchingRestaurants = titles.filter((title) => title.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.restaurant-item');
  assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

  matchingRestaurants.forEach(async (title, index) => {
    const visibleTitle = await I.grabTextFrom(locate('.restaurant__name').at(index + 1));
    assert.strictEqual(title, visibleTitle);
  });
});
