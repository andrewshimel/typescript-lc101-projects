import {Payload} from './Payload';

export class Cargo implements Payload{
    massKg: number;
    material: string;
    constructor(mass:number, mat:string){
        this.massKg = mass;
        this.material = mat;
    }
}