import { Material } from "./Material";
import { Users } from "./Users";

export enum FloorLevel {
    REZ_DE_CHAUSSEE = "REZ_DE_CHAUSSEE",
    PREMIER_ETAGE = "PREMIER_ETAGE",
    DEUXIEME_ETAGE = "DEUXIEME_ETAGE",
   
  }
  export enum Quality {
    STANDING = "STANDING",
    HAUT_STANDING = "HAUT_STANDING",
   
  }

export class Project {
    id: number;
    projectName: string;
    creationDate:Date;
    totalPrice:number;
    lanDimensions:string;
    floorLevel:FloorLevel;
    quality:Quality;
    nbBedroom:number;
    nbKitchen:number;
    nbLiving:number;
    nbBathroom:number;
    material:Material[];
    user:Users;

}
