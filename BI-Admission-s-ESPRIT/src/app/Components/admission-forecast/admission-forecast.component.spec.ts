import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionForecastComponent } from './admission-forecast.component';

describe('AdmissionForecastComponent', () => {
  let component: AdmissionForecastComponent;
  let fixture: ComponentFixture<AdmissionForecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmissionForecastComponent]
    });
    fixture = TestBed.createComponent(AdmissionForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
