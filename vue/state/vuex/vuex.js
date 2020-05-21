import 'https://unpkg.com/vue/dist/vue.js'
import 'https://unpkg.com/vuex/dist/vuex.js'

const store = new Vuex.Store({
    state: {
        increments: 0,
        decrements: 0,
        message: 'Hello Vuex!'
    },
    getters: {
        count: state => state.increments - state.decrements
    },
    mutations: {
        increment: (state, n) => state.increments += n,
        decrement: (state, n) => state.decrements += n,
        updateMassage: (state, newMessage) => state.message  = newMessage
    }
    
})

const PlusButton = {
    template: `<button @click='increment'>+</button>`,
    methods: {
        increment: () => store.commit('increment', 1)
    }
}

const MinusButton = {
    template: `<button @click='decrement'>-</button>`,
    methods: {
        decrement: () => store.commit('decrement', 1)
    }
}

const PlusTenButton = {
    template: `<button @click='increment'>+ 10</button>`,
    methods: {
        increment: () => store.commit('increment', 10)
    }
}

const MinusTenButton = {
    template: `<button @click='decrement'>- 10</button>`,
    methods: {
        decrement: () => store.commit('decrement', 10)
    }
}

const MyInput = {
    // template: `<input type="text" :value="message" @input="updateMassage"></input>`,
    template: `<input type="text" v-model="message"></input>`,
    methods: {
        updateMassage: (event) => store.commit('updateMessage', event.target.value)
    },
    computed: {
        // message: () => store.state.message
        message: {
            get: () => store.state.message,
            set: (value) => store.commit('updateMessage', value)
        }
    }
}

new Vue({
    el:'#app',
    store,
    components: {PlusButton, PlusTenButton, MinusButton, MinusTenButton, MyInput },
    template: `
        <div>
            <p>{{count}}</p>
            <p>
                <plus-button>+</plus-button>
                <minus-button></minus-button>
                <plus-ten-button></plus-ten-button>
                <minus-ten-button></minus-ten-button>
            </p>
            <p>
                <my-input></my-input>
            </p>
        </div>
    `,
    computed: {
            count() {
                return this.$store.getters.count
            }
    }
})