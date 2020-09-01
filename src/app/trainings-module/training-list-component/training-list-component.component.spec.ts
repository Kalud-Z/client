import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingListComponentComponent } from './training-list-component.component';

describe('TrainingListComponentComponent', () => {
  let component: TrainingListComponentComponent;
  let fixture: ComponentFixture<TrainingListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
