import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputMercanciesComponent } from './output-mercancies.component';

describe('OutputMercanciesComponent', () => {
  let component: OutputMercanciesComponent;
  let fixture: ComponentFixture<OutputMercanciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutputMercanciesComponent]
    });
    fixture = TestBed.createComponent(OutputMercanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
