var app = new Vue({
    el: '#app',
    data:{
        good: false
    },
    methods: {
        hour() {
            let now = new Date();
            return now.getHours();
        }
    }
})