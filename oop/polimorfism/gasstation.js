class BaseStation {
    fillCar() {
    }
}
// ShellStation extinde BaseStation (clasa de baza0)
class ShellStation extends BaseStation {
    fillCar() {
        console.log('Filling car with shell diesel.');
    }
}

class FakeStation extends BaseStation {
    fillCar() {
        console.log('Filling car with water');
    }
}

class Driver {

    //js doc - documentatie de javascript
    /**
     * 
     * @param {BaseStation} gasStation 
     */

    goToCloseStation(gasStation) {
        gasStation.fillCar();
    }
}

var myStation = new ShellStation();
var fakeStation = new FakeStation();


var radu = new Driver();
radu.goToCloseStation(fakeStation);

// myStation.fillCar();
// fakeStation.fillCar();