import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaragesFilterComponent } from './garages-filter.component';

describe('GaragesFilterComponent', () => {
  let component: GaragesFilterComponent;
  let fixture: ComponentFixture<GaragesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaragesFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GaragesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
