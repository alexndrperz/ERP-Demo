import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOutputComponent } from './details-output.component';

describe('DetailsOutputComponent', () => {
  let component: DetailsOutputComponent;
  let fixture: ComponentFixture<DetailsOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsOutputComponent]
    });
    fixture = TestBed.createComponent(DetailsOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
