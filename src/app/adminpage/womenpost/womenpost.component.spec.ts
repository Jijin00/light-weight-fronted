import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenpostComponent } from './womenpost.component';

describe('WomenpostComponent', () => {
  let component: WomenpostComponent;
  let fixture: ComponentFixture<WomenpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
