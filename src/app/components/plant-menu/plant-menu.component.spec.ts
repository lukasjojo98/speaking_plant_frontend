import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantMenuComponent } from './plant-menu.component';

describe('PlantMenuComponent', () => {
  let component: PlantMenuComponent;
  let fixture: ComponentFixture<PlantMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
