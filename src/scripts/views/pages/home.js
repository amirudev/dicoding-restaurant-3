import RestaurantApiSource from '../../data/restaurantsapi-source';
import '../components/restaurant-item';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <section class="hero">
            <picture>
              <source media=(max-width: 600px) srcset="./images/hero-image-small.jpg" alt="Gambar hero - chef sedang memasak">
              <img class="lazyload" src="./images/hero-image-large.jpg" alt="Gambar hero - chef sedang memasak">
            </picture>
            <div class="hero-title">
                <div class="hero-title-container responsive-container">
                    <h1>Madang D'Seat Restaurant Finder</h1>
                    <p>Temukan restoran yang sesuai denganmu disini</p>
                    <p>Menyajikan ribuan restoran pilihan dari seluruh Indonesia yang pastinya menggugah selera kamu, mulai cari sekarang !</p>
                </div>
            </div>
        </section>
        <section class="list-restaurant">
            <div class="responsive-container" id="focusContent">
                <h2 class="list-restaurant-title">Jelajahi Restoran</h2>
                <div class="restaurant-list" id="restaurant-list">

                </div>
            </div>
        </section>
        `;
  },

  async afterRender() {
    const restaurantApi = await RestaurantApiSource.restaurantList();

    if (!restaurantApi.error) {
      const restaurantContainer = document.querySelector('#restaurant-list');
      restaurantApi.restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Home;
