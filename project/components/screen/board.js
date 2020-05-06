Vue.component('board', {
    template: `
        <div class="board">
            <table>
                <tr v-for="line of lines">
                    <td v-for="column of columns "></td>
                </tr>
            </table>
        </div>
    `,
    data: () => {
        let createLines = [];
        let createColumns = [];
        let nrLine = 15;
        let nrColumn = 10;

        for (let i = 0; i <= nrLine; i++) {
            createLines.push(i);
        };
        for (let i = 0; i <= nrColumn; i++) {
            createColumns.push(i);
        };

        return { 
            lines: createLines,
            columns : createColumns    
        };
    }
})


