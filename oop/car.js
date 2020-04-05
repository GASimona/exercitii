var myCar = {
    make: "Ford",
    model: "GT",
    year: 2020,
    mileage: 1100.5,
    maxSpeed: 300,
    color: "blue",
    started: false,
    drive: function (distance) {
        this.mileage += distance;
    }
}

var anotherCar = {
    make: "Chevy",
    model: "Bel Air",
    year: 1960,
    mileage: 3450,
    maxSpeed: 160,
    color: "red",
    started: true
}