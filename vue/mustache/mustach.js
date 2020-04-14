var app = new Vue({
    el: '#app',
    data: {
        message: 'Do you like my moustache? }}',
        counter: 10,
        myclass: 'important'
    },
    method: {
    },
    computed: {
        reversedMessage() {
            return this.message
                .split('')
                .reverse()
                .join('');
        }
    }
})