import { IngenieurDetail } from "./IngenieurDetail";
import { Material } from "./Material";
import { Project } from "./Project";

export enum Role {
    ADMINISTRATOR = "ADMINISTRATOR",
    SUPPLIER = "SUPPLIER",
    ENGINEER = "SILENGINEERVER",
    CLIENT = "CLIENT"
  }
export class Users {
  id: number;
  firstName: string; 
  lastName: string; 
  email: string;
  pwd: string; 
  role:Role;
  phoneNumber:string;
  material:Material[];
  Projects:Project[];
  ingenieurDetal:IngenieurDetail;

}