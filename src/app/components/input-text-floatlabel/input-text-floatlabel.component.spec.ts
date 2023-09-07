import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextFloatlabelComponent } from './input-text-floatlabel.component';

describe('InputTextFloatlabelComponent', () => {
  let component: InputTextFloatlabelComponent;
  let fixture: ComponentFixture<InputTextFloatlabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputTextFloatlabelComponent]
    });
    fixture = TestBed.createComponent(InputTextFloatlabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
