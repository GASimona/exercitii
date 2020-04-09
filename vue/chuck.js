var app = new Vue({
    el: "#app", 
    date: {
        fact: "Loading..."
    },
    // metoda ce sa apeleaza cand porneste aplicatia:
    mounted() {
        axios
        .get('http://api.icndb.com/jokes/random')
            .then(response => this.fact = response.date.value.joke)
            .catch(error => console.log(error));
        }
});