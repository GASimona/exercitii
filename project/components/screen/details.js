Vue.component('game-details', {
    template: `<div class="details">
    <div class="nextPiece">
        <p>NEXT</p>
        <table>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
    </div>
    <div class="hiScore">
        <p>HI-SCORE</p>
        <div>{{ ceva-scor }}</div>
    </div>
    <div class="score">
        <p>SCORE</p>
        <div>{{ scor }}</div>
    </div>
    <div>
        <p>LEVEL</p>
        <div>{{ level }}</div>
    </div>
</div>`
})