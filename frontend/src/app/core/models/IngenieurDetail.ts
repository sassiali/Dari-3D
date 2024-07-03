import { PicturesOfDoneProjects } from "./PicturesOfDoneProjects";
import { Users } from "./Users";

export class IngenieurDetail {
    id: number;
    Experience: string;
    Description:string;
    user:Users;
    pictures:PicturesOfDoneProjects[];
}
