import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import {Payload} from './Payload';

export class Rocket{
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name:string, cap:number){
        this.name = name;
        this.totalCapacityKg = cap;
    }
    sumMass(items: Payload[]):number{
        let sum:number = 0;
        for (let item in items){
            sum += items[item].massKg;
        }
        return sum;
    }
    currentMassKg():number{
        let totalSum:number = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return totalSum;
    }
    canAdd(item: Payload):boolean{
        if (item.massKg + this.currentMassKg() <= this.totalCapacityKg){
            return true;
        }else{
            return false;
        }
    }
    addCargo(cargo: Cargo):boolean{
        if (this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        }else{
            return false;
        } 
    }
    addAstronaut(astronaut: Astronaut){
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }else{
            return false;
        }
    }
}