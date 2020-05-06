Vue.component('game-details', {
    template: `
        <div class="details">
            <div class="nextPiece">
                <p>NEXT</p>
                <table>
                    <tr v-for="line of lines">
                        <td v-for="column of columns"></td>
                    </tr>
                </table>
            </div>
            <div class="hiScore">
                <p>HI-SCORE</p>
                <div>{{ hiScoreValue }}</div>
            </div>
            <div class="score">
                <p>SCORE</p>
                <div>{{ scoreValue }}</div>
            </div>
            <div>
                <p>LEVEL</p>
                <div>{{ levelValue }}</div>
            </div>
        </div>`,
    data() {
        let createLines = [];
        let createColumns = [];
        let nrLine = 4;
        let nrColumn = 4;

        for (let i = 0; i < nrLine; i++) {
            createLines.push(i);
        };
        for (let i = 0; i < nrColumn; i++) {
            createColumns.push(i);
        };

        let valueHiScore = 10;
        let valueScore = 2;
        let valueLevel = 1;


        return { 
            lines: createLines,
            columns : createColumns,
            hiScoreValue: valueHiScore,
            scoreValue: valueScore,
            levelValue: valueLevel 
        };
    }
})