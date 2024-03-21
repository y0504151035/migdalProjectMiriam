import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaragesComponent } from './garages.component';

describe('GaragesComponent', () => {
  let component: GaragesComponent;
  let fixture: ComponentFixture<GaragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaragesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GaragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
