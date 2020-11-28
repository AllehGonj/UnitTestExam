import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  calculatorForm;
  calculationResult;
  validators = [
    Validators.required,
    Validators.maxLength(10)
  ];

  constructor(private formBuilder: FormBuilder) {
  }

  get firstOperating(): FormControl {
    return this.calculatorForm.get('firstOperating');
  }

  get secondOperating(): FormControl {
    return this.calculatorForm.get('secondOperating');
  }

  set firstOperatingValue(value: number) {
    this.calculatorForm.controls.firstOperating.setValue(value);
  }

  set secondOperatingValue(value: number) {
    this.calculatorForm.controls.secondOperating.setValue(value);
  }

  ngOnInit(): void {
    this.calculatorForm = this.formBuilder.group({
      firstOperating: new FormControl(null, this.validators),
      secondOperating: new FormControl(null, this.validators)
    });
  }

  performOperation(target: string): void {
    let result;
    switch (target) {
      case 'addition':
        result = this.addition();
        break;
      case 'subtraction':
        result = this.subtraction();
        break;
      case 'multiplication':
        result = this.multiplication();
        break;
      case 'division':
        result = this.division();
        break;
    }

    this.calculationResult = result;
  }

  addition(): number {
    return this.firstOperating.value + this.secondOperating.value;
  }

  subtraction(): number {
    return this.firstOperating.value - this.secondOperating.value;
  }

  multiplication(): number {
    let result = 0;
    for (let i = 1; i <= this.secondOperating.value; i++) {
      result += this.firstOperating.value;
    }
    return result;
  }

  division(): number {
    let result = this.firstOperating.value;
    let quotient = 0;
    while (result >= this.secondOperating.value) {
      result -= this.secondOperating.value;
      quotient++;
    }
    return quotient;
  }
}
