import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductiveFeatureComponent } from './productive-feature.component';

describe('ProductiveFeatureComponent', () => {
  let component: ProductiveFeatureComponent;
  let fixture: ComponentFixture<ProductiveFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductiveFeatureComponent]
    });
    fixture = TestBed.createComponent(ProductiveFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
