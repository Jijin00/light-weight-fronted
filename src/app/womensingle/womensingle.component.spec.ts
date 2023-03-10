import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensingleComponent } from './womensingle.component';

describe('WomensingleComponent', () => {
  let component: WomensingleComponent;
  let fixture: ComponentFixture<WomensingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomensingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
