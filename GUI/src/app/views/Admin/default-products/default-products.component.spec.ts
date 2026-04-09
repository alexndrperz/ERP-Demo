import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultProductsComponent } from './default-products.component';

describe('DefaultProductsComponent', () => {
  let component: DefaultProductsComponent;
  let fixture: ComponentFixture<DefaultProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultProductsComponent]
    });
    fixture = TestBed.createComponent(DefaultProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
