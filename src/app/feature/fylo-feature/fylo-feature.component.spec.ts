import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FyloFeatureComponent } from './fylo-feature.component';

describe('FyloFeatureComponent', () => {
  let component: FyloFeatureComponent;
  let fixture: ComponentFixture<FyloFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FyloFeatureComponent]
    });
    fixture = TestBed.createComponent(FyloFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
