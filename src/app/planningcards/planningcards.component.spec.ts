import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningcardsComponent } from './planningcards.component';

describe('PlanningcardsComponent', () => {
  let component: PlanningcardsComponent;
  let fixture: ComponentFixture<PlanningcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
