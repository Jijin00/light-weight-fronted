import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenpostComponent } from './menpost.component';

describe('MenpostComponent', () => {
  let component: MenpostComponent;
  let fixture: ComponentFixture<MenpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
