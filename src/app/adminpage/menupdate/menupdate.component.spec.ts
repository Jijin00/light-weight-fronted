import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenupdateComponent } from './menupdate.component';

describe('MenupdateComponent', () => {
  let component: MenupdateComponent;
  let fixture: ComponentFixture<MenupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
