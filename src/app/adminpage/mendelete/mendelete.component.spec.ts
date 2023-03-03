import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MendeleteComponent } from './mendelete.component';

describe('MendeleteComponent', () => {
  let component: MendeleteComponent;
  let fixture: ComponentFixture<MendeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MendeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MendeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
