import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesspostComponent } from './accesspost.component';

describe('AccesspostComponent', () => {
  let component: AccesspostComponent;
  let fixture: ComponentFixture<AccesspostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesspostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesspostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
