import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MengetComponent } from './menget.component';

describe('MengetComponent', () => {
  let component: MengetComponent;
  let fixture: ComponentFixture<MengetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MengetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MengetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
