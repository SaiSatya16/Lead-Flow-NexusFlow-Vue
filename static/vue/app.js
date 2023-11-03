
import router from "./router.js";



const app = new Vue({
    el: '#app',
    delimiters: ['%{', '}'],
    data: {
        message: 'Hello Vue!',
        flag: false,
    },
    router,
    methods: {
        toggleSidebar() {
            document.body.classList.toggle('toggle-sidebar');
        }
    },
});
