import FavouriteRestaurantDB from '../../data/favouriterestaurant-idb';
import RestaurantApiSource from '../../data/restaurantsapi-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import {
  createDetailRestaurantItem,
  createLikeButtonTemplate,
  createReviewBoxTemplate,
  createReviewedBoxTemplate,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <section class="detail-restaurant" id="focusContent">
          <div id="restaurant"></div>
        </section>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    let restaurant = await RestaurantApiSource.detailRestaurant(url.id);

    restaurant = restaurant.restaurant;

    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createDetailRestaurantItem(restaurant);

    const likeButtonContainer = document.querySelector('#restaurant-like-container');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#restaurant-like-container'),
      favoriteRestaurant: FavouriteRestaurantDB,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
      },
    });

    const writeReviewContainer = document.querySelector('#write-review-container');
    writeReviewContainer.innerHTML = createReviewBoxTemplate();

    const addNewReviewButton = document.querySelector('#add-new-review-button');
    addNewReviewButton.addEventListener('click', () => {
      const name = document.querySelector('#input-name').value;
      const review = document.querySelector('#input-review').value;

      const reviewPost = RestaurantApiSource.addNewReview({
        id: restaurant.id,
        name,
        review,
      });

      reviewPost.then((response) => {
        const submittedComment = response.customerReviews[response.customerReviews.length - 1];
        writeReviewContainer.innerHTML = createReviewedBoxTemplate(submittedComment.review);
      });
    });
  },
};

export default Detail;
