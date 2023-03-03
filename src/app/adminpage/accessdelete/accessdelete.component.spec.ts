import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessdeleteComponent } from './accessdelete.component';

describe('AccessdeleteComponent', () => {
  let component: AccessdeleteComponent;
  let fixture: ComponentFixture<AccessdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessdeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
