import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryClustersComponent } from './industry-clusters.component';

describe('IndustryClustersComponent', () => {
  let component: IndustryClustersComponent;
  let fixture: ComponentFixture<IndustryClustersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndustryClustersComponent]
    });
    fixture = TestBed.createComponent(IndustryClustersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
