import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSpecificComponent } from './card-specific.component';

describe('CardSpecificComponent', () => {
  let component: CardSpecificComponent;
  let fixture: ComponentFixture<CardSpecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSpecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
