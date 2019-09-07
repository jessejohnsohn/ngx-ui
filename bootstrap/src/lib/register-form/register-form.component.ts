import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  Validators,
  NgControl,
  FormBuilder,
  ValidationErrors,
  FormGroup
} from '@angular/forms';
import { UserRegister } from '@ngx-utility/authentication';

const registerFormConfig: { [K in keyof UserRegister]: any } = {
  emailAddress: ['', [Validators.required]],
  password: ['', [Validators.required]]
};
@Component({
  selector: 'ngb-custom-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  form = this.fb.group(registerFormConfig);

  constructor(public ngControl: NgControl, private readonly fb: FormBuilder) {
    ngControl.valueAccessor = this;
  }

  ngOnInit() {
    const control = this.ngControl.control;
    control.setValidators(this.validate);
    control.updateValueAndValidity();
  }

  writeValue(value: UserRegister): void {
    if (value) {
      this.form.setValue(value, { emitEvent: false });
    }
  }

  registerOnChange(fn: (value: UserRegister) => void) {
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
