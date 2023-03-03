import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MencomponentComponent } from './mencomponent.component';

describe('MencomponentComponent', () => {
  let component: MencomponentComponent;
  let fixture: ComponentFixture<MencomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MencomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MencomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
