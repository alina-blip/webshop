import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailContainerComponent } from './product-detail-container.component';

describe('ProductDetailContainerComponent', () => {
  let component: ProductDetailContainerComponent;
  let fixture: ComponentFixture<ProductDetailContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ProductDetailContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
