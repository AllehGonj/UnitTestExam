import {Component, HostListener, OnInit} from '@angular/core';
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

  set firstOperatingValue(value: string) {
    this.calculatorForm.controls.firstOperating.setValue(value);
  }

  set secondOperatingValue(value: string) {
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
        result = this.addition(this.firstOperating.value, this.secondOperating.value);
        break;
      case 'subtraction':
        result = this.subtraction(this.firstOperating.value, this.secondOperating.value);
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

  addition(firstOperating, secondOperating): string {
    let maxNumber = this.calculateHigherOperator(firstOperating, secondOperating);
    let minNumber = this.calculateHigherOperator(firstOperating, secondOperating) === firstOperating ? secondOperating : firstOperating;
    let result = '';
    let carry = 0;

    minNumber = minNumber.padStart(maxNumber.length, '0');

    for (let i = maxNumber.length - 1; i >= 0; i--) {
      let sum = Number(maxNumber.charAt(i)) + Number(minNumber.charAt(i));
      if (carry === 1) sum++;
      if (sum >= 10) {
        carry = 1;
        result = (sum - 10).toString() + result;
      } else {
        carry = 0;
        result = sum.toString() + result;
      }
    }

    return result;
  }

  subtraction(firstOperating, secondOperating): string {
    let maxNumber = this.calculateHigherOperator(firstOperating, secondOperating);
    let minNumber = this.calculateHigherOperator(firstOperating, secondOperating) === firstOperating ? secondOperating : firstOperating;
    let isNegative = maxNumber !== firstOperating;
    let result = '';
    let carry = 0;
    let carryAux = 0;

    minNumber = minNumber.padStart(maxNumber.length, '0');
    carryAux = Number(maxNumber) - Number(minNumber)

    for (let i = maxNumber.length - 1; i >= 0; i--) {
      let aux = (carry !== 0 && Number(maxNumber.charAt(i)) !== 0) ? Number(maxNumber.charAt(i)) - 1 : Number(maxNumber.charAt(i));

      if (carry !== 0 && Number(maxNumber.charAt(i)) === 0) {
        aux = 9;
      }else  if (aux < Number(minNumber.charAt(i))) {
        carry = aux + 10;
      } else {
        carry =  0;
      }

      let sub = (aux + carry) - Number(minNumber.charAt(i));
      result = carryAux.toString();
    }

    return result;
  }

  multiplication(): string {
    let result = '';
    for (let i = 1; i <= Number(this.secondOperating.value); i++) {
      result = this.addition(this.firstOperating.value, result);
    }
    return result;
  }

  division(): number {
    let result = Number(this.firstOperating.value);
    let quotient = 0;
    while (result >= Number(this.secondOperating.value)) {
      result -= Number(this.secondOperating.value);
      quotient++;
    }
    return quotient;
  }

  calculateHigherOperator(firstOperating, secondOperating) {
    let equal = firstOperating.length === secondOperating.length;
    let max = '';

    if (equal) {
      if (firstOperating === secondOperating) {
        max = firstOperating;
        return max;
      }

      for (let i = 0; i < firstOperating.length; i++) {
        let indexFirstOperating = Number(firstOperating.charAt(i));
        let indexSecondOperating = Number(secondOperating.charAt(i));

        if (indexFirstOperating !== indexSecondOperating) {
          max = (indexFirstOperating > indexSecondOperating) ? firstOperating : secondOperating;
          return max;
        }
      }

      return
    }

    max = (firstOperating.length > secondOperating.length) ? firstOperating : secondOperating;
    return max;
  }

  handleKeyboardNumericEvent(keyCode): boolean {
    return (keyCode >= 48 && keyCode <= 57)
  }

}
