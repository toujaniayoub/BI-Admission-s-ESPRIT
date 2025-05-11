import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionClusteringComponent } from './admission-clustering.component';

describe('AdmissionClusteringComponent', () => {
  let component: AdmissionClusteringComponent;
  let fixture: ComponentFixture<AdmissionClusteringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmissionClusteringComponent]
    });
    fixture = TestBed.createComponent(AdmissionClusteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
