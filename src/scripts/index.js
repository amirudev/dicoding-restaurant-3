import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import CONFIG from './global/config';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
  skipLink: document.querySelector('#skipLink'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  if (CONFIG.MODE === 'PRODUCTION') {
    swRegister();
  }
});
