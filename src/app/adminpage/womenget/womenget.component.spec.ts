import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomengetComponent } from './womenget.component';

describe('WomengetComponent', () => {
  let component: WomengetComponent;
  let fixture: ComponentFixture<WomengetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomengetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomengetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
