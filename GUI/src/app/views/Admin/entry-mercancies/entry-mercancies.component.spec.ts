import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryMercanciesComponent } from './entry-mercancies.component';

describe('EntryMercanciesComponent', () => {
  let component: EntryMercanciesComponent;
  let fixture: ComponentFixture<EntryMercanciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntryMercanciesComponent]
    });
    fixture = TestBed.createComponent(EntryMercanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
