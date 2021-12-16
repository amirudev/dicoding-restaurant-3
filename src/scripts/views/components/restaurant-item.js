import CONFIG from '../../global/config';

import Restaurant from '../../models/restaurant';

class RestaurantItem extends HTMLElement {
  constructor() {
    super();
    this.restaurant = new Restaurant();
    this.restaurant.name = this.getAttribute('data-name');
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="restaurant-item">
          <img src="${CONFIG.BASE_IMAGE_URL_SMALL + this.restaurant.pictureId}" alt="Gambar restoran ${this.restaurant.name}">
          <div class="restaurant-item-city">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p>${this.restaurant.rating}</p>
          </div>
          <div class="restaurant-item-detail">
              <h5>${this.restaurant.name}</h5>
              <p>${this.restaurant.description.substring(0, 150)}...</p>
              <div class="restaurant-item-detail-info">
                  <p>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      ${this.restaurant.city}</p>
              </div>
              <div class="restaurant-item-button-container">
                  <a href="#">Kunjungi Restoran</a>
              </div>
          </div>
      </div>`;
  }
}

customElements.define('restaurant-item', RestaurantItem);
