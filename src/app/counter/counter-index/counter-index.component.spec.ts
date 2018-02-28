import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterIndexComponent } from './counter-index.component';

describe('CounterIndexComponent', () => {
  let component: CounterIndexComponent;
  let fixture: ComponentFixture<CounterIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
