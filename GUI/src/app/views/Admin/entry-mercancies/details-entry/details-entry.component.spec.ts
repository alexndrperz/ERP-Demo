import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEntryComponent } from './details-entry.component';

describe('DetailsEntryComponent', () => {
  let component: DetailsEntryComponent;
  let fixture: ComponentFixture<DetailsEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsEntryComponent]
    });
    fixture = TestBed.createComponent(DetailsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
