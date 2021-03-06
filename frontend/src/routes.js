import Login from "./components/Login";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import { store } from "./store/store";

export const routes = [
  { path: "", component: Home },
  { path: "/login", component: Login },
  { path: "/cart", component: Cart },
  {
    path: "/dashboard",
    component: Dashboard,
    beforeEnter(to, from, next) {
      if (store.state.userData.loggedIn) {
        next();
      } else {
        next("/login");
      }
    }
  }
];
