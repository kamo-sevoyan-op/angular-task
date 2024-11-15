import { Component, inject, input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { User, Gender } from './user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
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
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  providers: [provideNativeDateAdapter()],
})
export class UserComponent implements OnInit {
  userId = input.required<string>();
  usersService = inject(UsersService);

  languages: { name: string; value: string }[] = [
    { name: 'English', value: 'en' },
    { name: 'Arabic', value: 'ar' },
    { name: 'French', value: 'fr' },
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
    isActivated: new FormControl('', {
      validators: [Validators.required],
    }),
    profileImageUrl: new FormControl('', {
      validators: [Validators.required],
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
    let { id, ...rest } = this.usersService.getDataById(this.userId())!;

    let result = { ...rest, dateOfBirth: new Date(rest.dateOfBirth!) };
    this.form.setValue(result);
  }

  ngOnInit(): void {
    this.setValues();
  }
}

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

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
