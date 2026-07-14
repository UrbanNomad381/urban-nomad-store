import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHighlightTile } from './product-highlight-tile';

describe('ProductHighlightTile', () => {
  let component: ProductHighlightTile;
  let fixture: ComponentFixture<ProductHighlightTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductHighlightTile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductHighlightTile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
