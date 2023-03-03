import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessgetComponent } from './accessget.component';

describe('AccessgetComponent', () => {
  let component: AccessgetComponent;
  let fixture: ComponentFixture<AccessgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
