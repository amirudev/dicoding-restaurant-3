import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favourite from '../views/pages/favourite';

const routes = {
  '/': Home,
  '/detail/:id': Detail,
  '/favourite': Favourite,
};

export default routes;
