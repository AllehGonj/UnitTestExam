import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CalculatorComponent} from './calculator.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // FUNCTIONAL TESTS

  it('should perform an addition', () => {
    const EXPECTED = 12;
    component.firstOperatingValue = 10;
    component.secondOperatingValue = 2;

    const value: number = component.addition();
    expect(value).toEqual(EXPECTED);
  });

  it('should perform a subtraction', () => {
    const EXPECTED = 12;
    component.firstOperatingValue = 10;
    component.secondOperatingValue = 2;

    const value: number = component.addition();
    expect(value).toEqual(EXPECTED);
  });

  it('should multiply', () => {
    const EXPECTED = 12;
    component.firstOperatingValue = 10;
    component.secondOperatingValue = 2;

    const value: number = component.addition();
    expect(value).toEqual(EXPECTED);
  });

  it('should perform a division', () => {
    const EXPECTED = 12;
    component.firstOperatingValue = 10;
    component.secondOperatingValue = 2;

    const value: number = component.addition();
    expect(value).toEqual(EXPECTED);
  });
});
