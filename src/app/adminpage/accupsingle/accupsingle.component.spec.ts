import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccupsingleComponent } from './accupsingle.component';

describe('AccupsingleComponent', () => {
  let component: AccupsingleComponent;
  let fixture: ComponentFixture<AccupsingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccupsingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccupsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
