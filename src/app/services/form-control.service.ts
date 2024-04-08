import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }

  getClassName(formGroup:FormGroup, controlName: string): string{
    const control = formGroup.get(controlName);
    control?.markAsTouched();
    if(control && (control.touched && control?.errors))
      return 'is-invalid';
    else if (control && (control.touched && control.valid))
      return 'is-valid';
    else
      return '';
  }

  getErrorMessage(formGroup:FormGroup, controlName: string): string {
    const control = formGroup.get(controlName);
    if(control && control.errors){
      if(control.hasError('required'))
        return this.formatControlName(controlName) + " is required";
      if(control.hasError('pattern'))
        return "Invalid " + this.formatControlName(controlName);
    }
    return '';
  }

  formatControlName(str: string) : string {
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str.replace(/([A-Z])/g, ' $1');
  }

}
