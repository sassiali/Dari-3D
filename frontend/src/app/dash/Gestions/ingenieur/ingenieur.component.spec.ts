import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngenieurComponent } from './ingenieur.component';

describe('IngenieurComponent', () => {
  let component: IngenieurComponent;
  let fixture: ComponentFixture<IngenieurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngenieurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngenieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
