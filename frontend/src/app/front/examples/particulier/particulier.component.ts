import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


enum Quality {
  STANDING = 'STANDING',
  HAUT_STANDING = 'HAUT_STANDING',
  BASIQUE = 'BASIQUE',
}

enum FloorLevel {
  REZ_DE_CHAUSSEE = 'REZ_DE_CHAUSSEE',
  PREMIER_ETAGE = 'PREMIER_ETAGE',
  DEUXIEME_ETAGE = 'DEUXIEME_ETAGE',
}

@Component({
  selector: 'app-particulier',
  templateUrl: './particulier.component.html',
  styleUrls: ['./particulier.component.scss']
})
export class ParticulierComponent implements OnInit {
  focus: boolean = false;
  focus1: boolean = false;
  plan2DUrl: string | null = null;
  surface: number | null = null;
  floorLevel: FloorLevel = FloorLevel.REZ_DE_CHAUSSEE;
  quality: Quality = Quality.BASIQUE;
  devisEstime: number = 0;

  constructor(private http: HttpClient, private _formBuilder: FormBuilder) {}

  ngOnInit() {
    // Initialization logic if needed
  }

  Quality = Quality;
  FloorLevel = FloorLevel;

  calculateDevis() {
    let pricePerSquareMeter = 0;

    switch (this.quality) {
      case Quality.HAUT_STANDING:
        pricePerSquareMeter = 2000;
        break;
      case Quality.STANDING:
        pricePerSquareMeter = 1700;
        break;
      case Quality.BASIQUE:
        pricePerSquareMeter = 1500;
        break;
    }

    switch (this.floorLevel) {
      case FloorLevel.PREMIER_ETAGE:
        pricePerSquareMeter *= 1.8;
        break;
      case FloorLevel.DEUXIEME_ETAGE:
        pricePerSquareMeter *= 2.4;
        break;
    }

    const totalDevis = (this.surface ?? 0) * pricePerSquareMeter;
    return totalDevis;
  }

  showDevis() {
    this.devisEstime = this.calculateDevis();
  }
}