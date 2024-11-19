import { Component, input, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Gender, User } from '../../pages/user/user.model';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { Tel, TelInput } from './tel-input/tel-input';
import { isEqual } from 'lodash';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelect,
    TelInput,
    MatIconModule,
    MatOption,
    MatButtonModule,
    MatNativeDateModule,
  ],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css',
})
export class InputFormComponent {
  userData = input<User>();
  isNewUser = input.required<boolean>();
  user = output<User>();
  cancel = output<void>();
  submitButtonName = input.required<string>();
  initialValues: User | null = null;

  languages: { name: string; value: string }[] = [
    { name: 'English', value: 'en' },
    { name: 'Arabic', value: 'ar' },
    { name: 'French', value: 'fr' },
    { name: 'German', value: 'ge' },
  ];

  genders: { name: string; value: Gender }[] = [
    { name: 'Male', value: 'male' },
    { name: 'Female', value: 'female' },
  ];

  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    dateOfBirth: new FormControl<Date>(new Date(), {
      validators: [Validators.required],
    }),
    firstName: new FormControl('', {
      validators: [Validators.required],
    }),
    middleName: new FormControl('', {
      validators: [Validators.required],
    }),
    lastName: new FormControl('', {
      validators: [Validators.required],
    }),
    status: new FormControl('', {
      validators: [Validators.required],
    }),
    profileImageUrl: new FormControl('', {
      validators: [Validators.required, invalidUrlValidator],
    }),
    phoneNumber: new FormControl<Tel | null>(null),
    gender: new FormControl<Gender | null>(null, {
      validators: [Validators.required],
    }),
    mainLanguage: new FormControl('', {
      validators: [Validators.required],
    }),
    nationality: new FormControl('', {
      validators: [Validators.required],
    }),
    recitations: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  setValues() {
    let user = this.userData();
    if (user) {
      let result = { ...user, dateOfBirth: new Date(user.dateOfBirth) };
      this.form.setValue(result);
      this.initialValues = user;
    }
  }

  ngOnInit(): void {
    this.setValues();
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const result = {
      email: this.form.value.email!,
      dateOfBirth: this.form.value.dateOfBirth!,
      firstName: this.form.value.firstName!,
      middleName: this.form.value.middleName!,
      lastName: this.form.value.lastName!,
      status: this.form.value.status!,
      profileImageUrl: this.form.value.profileImageUrl!,
      nationality: this.form.value.nationality!,
      phoneNumber: this.form.value.phoneNumber!,
      gender: this.form.value.gender as Gender,
      mainLanguage: this.form.value.mainLanguage!,
      recitations: this.form.value.recitations!,
    };
    this.user.emit(result);
  }

  onCancel() {
    this.cancel.emit();
  }

  isFormUnchanged(): boolean {
    return isEqual(this.form.value, this.initialValues);
  }

  disableLogic() {
    return (!this.isNewUser() && this.isFormUnchanged()) || this.form.invalid;
  }
}

function invalidUrlValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;
  const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return value && !urlPattern.test(value) ? { invalidUrl: true } : null;
}
