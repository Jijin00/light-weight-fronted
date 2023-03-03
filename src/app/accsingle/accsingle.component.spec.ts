import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccsingleComponent } from './accsingle.component';

describe('AccsingleComponent', () => {
  let component: AccsingleComponent;
  let fixture: ComponentFixture<AccsingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccsingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
