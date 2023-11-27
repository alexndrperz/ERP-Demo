import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalModalComponent } from './normal-modal.component';

describe('NormalModalComponent', () => {
  let component: NormalModalComponent;
  let fixture: ComponentFixture<NormalModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalModalComponent]
    });
    fixture = TestBed.createComponent(NormalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
