import { IngenieurDetail } from "./IngenieurDetail";
import { Material } from "./Material";
import { Project } from "./Project";

export enum Role {
    ADMINISTRATOR = "ADMINISTRATOR",
    SUPPLIER = "SUPPLIER",
    ENGINEER = "ENGINEER",
    CLIENT = "CLIENT"
  }
export class Users {
  id: number;
  userName:string;
  email: string;
  password: string; 
  role:Role;
  phoneNumber:string;
  material:Material[];
  Projects:Project[];
  ingenieurDetal:IngenieurDetail;

}