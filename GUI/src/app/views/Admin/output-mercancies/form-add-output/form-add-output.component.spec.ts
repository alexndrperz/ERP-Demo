import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddOutputComponent } from './form-add-output.component';

describe('FormAddOutputComponent', () => {
  let component: FormAddOutputComponent;
  let fixture: ComponentFixture<FormAddOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAddOutputComponent]
    });
    fixture = TestBed.createComponent(FormAddOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
