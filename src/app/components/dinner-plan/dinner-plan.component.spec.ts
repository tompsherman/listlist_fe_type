import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerPlanComponent } from './dinner-plan.component';

describe('DinnerPlanComponent', () => {
  let component: DinnerPlanComponent;
  let fixture: ComponentFixture<DinnerPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinnerPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinnerPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
