
import router from "./router.js";
import Sidebar from "./components/sidebar.js";
import header1 from "./components/header.js";
import footer1 from "./components/footer.js";




// const app = new Vue({
//     el: '#app',
//     delimiters: ['%{', '}'],
//     data: {
//         message: 'Hello Vue!',
//         flag: false,
//     },
//     router,
//     methods: {
//         toggleSidebar() {
//             document.body.classList.toggle('toggle-sidebar');
//         }
//     },
// });

new Vue({
    el: '#app',
    template: `<div>
    <header1 />
    <Sidebar />
    <router-view />
    <footer1 />
    </div>`,
    router,
    components: {
        Sidebar,
        header1,
        footer1,
    },
  })
  
