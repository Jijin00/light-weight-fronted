import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensingleComponent } from './mensingle.component';

describe('MensingleComponent', () => {
  let component: MensingleComponent;
  let fixture: ComponentFixture<MensingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
