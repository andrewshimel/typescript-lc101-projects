"use strict";
exports.__esModule = true;
var Rocket = /** @class */ (function () {
    function Rocket(name, cap) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = cap;
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var item in items) {
            sum += items[item].massKg;
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        var totalSum = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return totalSum;
    };
    Rocket.prototype.canAdd = function (item) {
        if (item.massKg + this.currentMassKg() <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
