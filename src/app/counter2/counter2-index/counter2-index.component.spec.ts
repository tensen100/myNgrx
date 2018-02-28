import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Counter2IndexComponent } from './counter2-index.component';

describe('Counter2IndexComponent', () => {
  let component: Counter2IndexComponent;
  let fixture: ComponentFixture<Counter2IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Counter2IndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Counter2IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
