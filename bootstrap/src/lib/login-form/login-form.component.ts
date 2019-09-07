import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  Validators,
  FormBuilder,
  ValidationErrors,
  NgControl,
  FormGroup
} from '@angular/forms';
import { UserLogin } from '@jesse-johnson/shared/ngx-utility/authentication';

const loginFormConfig: { [K in keyof UserLogin]: any } = {
  emailAddress: ['', [Validators.required]],
  password: ['', [Validators.required]]
};

@Component({
  selector: 'ngb-custom-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements ControlValueAccessor, OnInit {
  form = this.fb.group(loginFormConfig);

  constructor(public ngControl: NgControl, private readonly fb: FormBuilder) {
    ngControl.valueAccessor = this;
  }

  ngOnInit() {
    const control = this.ngControl.control;
    control.setValidators(this.validate);
    control.updateValueAndValidity();
  }

  writeValue(value: UserLogin): void {
    if (value) {
      this.form.setValue(value, { emitEvent: false });
    }
  }

  registerOnChange(fn: (value: UserLogin) => void) {
    this.form.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  onTouched: () => void = () => {};

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  validate = (): ValidationErrors => {
    const errors = this.collectErrors(this.form);
    return errors && errors.length > 0 ? errors : null;
  };

  collectErrors(ctrl: FormGroup): ValidationErrors {
    return Object.keys(ctrl.controls).reduce(
      (a, k) =>
        ctrl.controls[k].errors ? a.concat(ctrl.controls[k].errors) : a,
      []
    ) as ValidationErrors;
  }
}
