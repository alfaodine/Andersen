class Car {
    #fuelConsumption;
    #brand;
    #model;
    #yearOfManufacturing;
    #maxSpeed;
    #maxFuelVolume;
    #currentFuelVolume ;
    #isStarted;
    #mileage;
    constructor (brand, model, yearOfManufacturing, maxSpeed, maxFuelVolume, fuelConsumption, currentFuelVolume = 0, isStarted = false, mileage = 0) {
        if (typeof (brand) !== 'string' && (brand.length <= 0) && (brand.length > 50)) {
            throw new Error ('Check your brand');
        }
        if (typeof (model) !== 'string' && (model.length <= 0) && (model.length > 50)) {
            throw new Error ('Check your model');
        };
        let date = new Date;
        if (yearOfManufacturing < 1900 && yearOfManufacturing > date.getFullYear()){
            throw new Error ('Check your year Of Manufacturing');
        }
        if (maxSpeed < 100 && maxSpeed > 300) {
            throw new Error ('Check your max Speed');
        }
        if (maxFuelVolume < 5 && maxFuelVolume > 20) {
            throw new Error ('Check your max maxFuelVolume');
        }
        if (typeof (isStarted) !== 'boolean' && isStarted !== NaN) {
            throw new Error ('Check your isStarted');
        }
        if (typeof (mileage) !== 'number' && mileage !== Nan) {
            throw new Error ('Check your mileage');
        }
        if (typeof (currentFuelVolume ) !== 'number' && currentFuelVolume  !== Nan) {
            throw new Error ('Check your current Fuel Volume');
        }
        if (typeof (fuelConsumption) !== 'number' && fuelConsumption !== Nan) {
            throw new Error ('Check your fuelConsumption');
        }

        this.#brand = brand;
        this.#model = model;
        this.#yearOfManufacturing = yearOfManufacturing;
        this.#maxSpeed  = maxSpeed;
        this.#currentFuelVolume  = currentFuelVolume;
        this.#fuelConsumption = fuelConsumption;
        this.#isStarted = isStarted
        this.#maxFuelVolume = maxFuelVolume;
        this.#mileage  = mileage;
    }
    start() {
        if (this.isStarted === true) {
            throw new Error ('Машина уже заведена');
        }
        this.isStarted = true;
    }
    shutDownEngine() {        
        if (this.isStarted === false) {
            throw new Error ('Машина ещё не заведена');
        }
        this.isStarted = false;
    }
    fillUpGasTank(num) {
        if (typeof (num) !== 'number' && num !== Nan && num < 1) {
            throw new Error ('Неверное количество топлива для заправки');
        }
        if ((num + this.currentFuelVolume) > this.maxFuelVolume) {
            throw new Error ('Топливный бак переполнен');
        }
        this.currentFuelVolume += num;
    }
    drive(speed, hours) {
        if (typeof (speed) !== 'number' && speed !== Nan && speed < 1){
            throw new Error ('Неверная скорость');
        }
        if (typeof (hours) !== 'number' && hours !== Nan && hours < 1){
            throw new Error ('Неверное количество часов');
        }
        if (speed > this.maxSpeed) {
            throw new Error ('Машина не может ехать так быстро');
        }
        if (this.isStarted === false) {
            throw new Error ('Машина должна быть заведена, чтобы ехать');
        }
        let consum = speed * hours / 100 * this.fuelConsumption;
        if (consum > this.currentFuelVolume) {
            throw new Error ('Недостаточно топлива');   
        }
        this.currentFuelVolume -= consum;
        this.mileage += speed * hours;
    }
    get fuelConsumption() {
        return this.#fuelConsumption;
      }
    get brand() {
      return this.#brand;
    }
    get model() {
        return this.#model;
    }
    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }
    get maxSpeed() {
        return this.#maxSpeed;
    }
    get maxFuelVolume() {
        return this.#maxFuelVolume;
    }
    get fuelConsumption () {
        return this.#fuelConsumption;
    }
    get currentFuelVolume () {
        return this.#currentFuelVolume;
    }
    get isStarted  () {
        return this.#isStarted ;
    }
    get mileage   () {
        return this.#mileage;
    }
    set fuelConsumption(val) {
        this.#fuelConsumption = val;
      }
    set brand(val) {
        this.#brand = val;
    }
    set model(val) {
        this.#model = val;
    }
    set yearOfManufacturing(val) {
        this.#yearOfManufacturing = val;
    }
    set maxSpeed(val) {
        this.#maxSpeed = val;
    }
    set maxFuelVolume(val) {
        this.#maxFuelVolume = val;
    }
}
let car = new Car ('Mers', 'A-180', 2008, 250, 55, 10, 25, false, 40000);

module.exports = { Car };
