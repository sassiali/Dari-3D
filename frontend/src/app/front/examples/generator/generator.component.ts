import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { saveAs } from 'file-saver';
import * as JSZip from 'jszip';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent {
  chambres: number = 0;
  sallesDeBain: number = 0;
  cuisines: number = 0;
  garage: boolean = false;
  jardin: boolean = false;
  autreChose: string = '';
  northSideDetails: string = 'default north side details';
  southSideDetails: string = 'default south side details';
  eastSideDetails: string = 'default east side details';
  westSideDetails: string = 'default west side details';

  constructor(private http: HttpClient) {}

  decrement(property: string) {
    if (this[property] > 0) {
      this[property]--;
    }
  }

  increment(property: string) {
    this[property]++;
  }

  toggleGarage() {
    this.garage = !this.garage;
  }

  toggleJardin() {
    this.jardin = !this.jardin;
  }

  async generateAndConvertFloorPlans() {
    const description2D = `A floor plan (2D) 20*20 metre with ${this.chambres} bedrooms, ${this.sallesDeBain} bathrooms, ${this.cuisines} kitchen(s), ${this.garage ? 'a garage,' : ''} ${this.jardin ? 'a garden,' : ''} ${this.autreChose} and other features.`;
    const description3D = `A floor plan (3D) with dessign 50*20 metre with ${this.chambres} bedrooms, ${this.sallesDeBain} bathrooms, ${this.cuisines} kitchen(s), ${this.garage ? 'a garage,' : ''} ${this.jardin ? 'a garden,' : ''} ${this.autreChose} and other features.`;

    const northDescription = `${description3D} -  real North side 3D: ${this.northSideDetails}`;
    const southDescription = `${description3D} - real South side 3D: ${this.southSideDetails}`;
    const eastDescription = `${description3D} -  real East side 3D: ${this.eastSideDetails}`;
    const westDescription = `${description3D} -  real West side 3D: ${this.westSideDetails}`;

    const zip = new JSZip();

    await this.generateAndConvertFloorPlan('2d', description2D, '', zip);
    await this.generateAndConvertFloorPlan('3d', northDescription, 'north', zip);
    await this.generateAndConvertFloorPlan('3d', southDescription, 'south', zip);
    await this.generateAndConvertFloorPlan('3d', eastDescription, 'east', zip);
    await this.generateAndConvertFloorPlan('3d', westDescription, 'west', zip);

    zip.generateAsync({ type: 'blob' }).then(content => {
      saveAs(content, 'floorplans.zip');
    });
  }

  async generateAndConvertFloorPlan(planType: '2d' | '3d', description: string, side: string, zip: JSZip) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const payload = { description };

    const response = await this.http.post('http://localhost:9090/api/floorplan/generateAndConvert', payload, { headers, responseType: 'blob' }).toPromise();
    const fileName = planType === '2d' ? 'image2d.zip' : `image3d_${side}.zip`;
    zip.file(fileName, response);
  }
}