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
import { Gender, User } from '../../users/user/user.model';

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
    MatOption,
    MatButtonModule,
  ],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css',
})
export class InputFormComponent {
  userData = input<User>();
  user = output<User>();

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
      validators: [Validators.required, invalidDateValidator],
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
    phoneNumber: new FormControl('', {
      validators: [Validators.required],
    }),
    gender: new FormControl('', {
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
    if (this.userData()) {
      let user = this.userData()!;
      let result = { ...user, dateOfBirth: new Date(user.dateOfBirth) };
      this.form.patchValue(result);
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
      dateOfBirth: this.form.value.dateOfBirth!.toString(), // TODO check it later
      firstName: this.form.value.firstName!,
      middleName: this.form.value.middleName!,
      lastName: this.form.value.lastName!,
      status: this.form.value.status!,
      profileImageUrl: this.form.value.profileImageUrl!,
      nationality: this.form.value.nationality!,
      phoneNumber: this.form.value.phoneNumber!,
      gender: this.form.value.gender!,
      mainLanguage: this.form.value.mainLanguage!,
      recitations: this.form.value.recitations!,
    };

    this.user.emit(result);
  }
}

function invalidDateValidator(
  control: AbstractControl
): ValidationErrors | null {
  if (control.value === '') {
    return null;
  }

  const selectedDate = new Date(control.value);

  if (selectedDate.toDateString() === 'Invalid Date') {
    return { invalidDate: true };
  }
  return null;
}

function invalidUrlValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;
  const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return value && !urlPattern.test(value) ? { invalidUrl: true } : null;
}
