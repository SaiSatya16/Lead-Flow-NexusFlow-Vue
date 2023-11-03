import Home from "./components/home.js";

const routes = [
    { path: "/", component: Home }
];
const router = new VueRouter({
    routes,
  });
export default router;