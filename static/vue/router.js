import Home from "./components/home.js";
import Inquiry from "./components/Inquiry.js";    



const routes = [
    { 
    path: "/", 
    component: Home 
    },
    { 
    path: "/inquiry", 
    component: Inquiry 
    }
];
const router = new VueRouter({
    routes,
  });
export default router;