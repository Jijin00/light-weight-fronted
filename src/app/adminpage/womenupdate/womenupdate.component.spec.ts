import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenupdateComponent } from './womenupdate.component';

describe('WomenupdateComponent', () => {
  let component: WomenupdateComponent;
  let fixture: ComponentFixture<WomenupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
