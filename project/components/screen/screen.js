import './board.js'
import './details.js'

Vue.component('screen', {
    template: `<div class="screen">
        <board></board>
        <game-details></game-details>
    </div>`
})