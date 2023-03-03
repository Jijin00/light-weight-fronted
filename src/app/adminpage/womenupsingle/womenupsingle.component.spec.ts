import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenupsingleComponent } from './womenupsingle.component';

describe('WomenupsingleComponent', () => {
  let component: WomenupsingleComponent;
  let fixture: ComponentFixture<WomenupsingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenupsingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenupsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
