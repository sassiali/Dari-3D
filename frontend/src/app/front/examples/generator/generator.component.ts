import { Component } from '@angular/core';
import { GenererPlanService } from '../../../core/services/generer-plan.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent {
  cuisines: number = 0;
  chambres: number = 0;
  sallesDeBain: number = 0;
  garage: string = 'non';
  jardin: string = 'non';
  autreChose: string = '';

  constructor(private genererPlanService: GenererPlanService) {}

  toggleGarage() {
    this.garage = this.garage === 'oui' ? 'non' : 'oui';
  }

  toggleJardin() {
    this.jardin = this.jardin === 'oui' ? 'non' : 'oui';
  }

  increment(field: string) {
    this[field]++;
  }

  decrement(field: string) {
    if (this[field] > 0) {
      this[field]--;
    }
  }

  generatePlan() {
    const description = `A floor plan 2d 50*20 metre with  ${this.chambres} bedrooms, ${this.sallesDeBain} bathrooms, ${this.cuisines} kitchen(s), a garage, a garden,${this.autreChose} and other features.`;
    console.log('Plan généré avec la description suivante:');
    console.log(description);
    console.log('Garage:', this.garage);
    console.log('Jardin:', this.jardin);
    console.log('Autre chose:', this.autreChose);
    console.log('Cuisines:', this.cuisines);
    console.log('Chambres:', this.chambres);
    console.log('Salles de bain:', this.sallesDeBain);

    this.genererPlanService.generateFloorPlan(description).subscribe(
      (imageBlob) => {
        const url = URL.createObjectURL(imageBlob);
        console.log('Floor plan generated:', url);
        window.open(url);
      },
      (error) => {
        console.error('Failed to generate floor plan:', error);
      }
    );
  }
}