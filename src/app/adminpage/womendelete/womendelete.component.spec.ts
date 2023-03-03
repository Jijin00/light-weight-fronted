import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomendeleteComponent } from './womendelete.component';

describe('WomendeleteComponent', () => {
  let component: WomendeleteComponent;
  let fixture: ComponentFixture<WomendeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomendeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomendeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
