import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessupdateComponent } from './accessupdate.component';

describe('AccessupdateComponent', () => {
  let component: AccessupdateComponent;
  let fixture: ComponentFixture<AccessupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
