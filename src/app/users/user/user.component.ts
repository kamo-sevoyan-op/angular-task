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
import { Gender } from './user.model';
import { UsersService } from '../users.service';
import { AbstractControl, ValidationErrors } from '@angular/forms';

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
    status: new FormControl('', {
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
    let user = this.usersService.getDataById(this.userId())!;
    console.log(`🟢 ${user}`)
    let result = { ...user, dateOfBirth: new Date(user.dateOfBirth!) };
    this.form.patchValue(result);
  }

  ngOnInit(): void {
    this.setValues();
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(`🟢 Form is valid, submitting.`);

      const result = {
        email: this.form.value.email!,
        dateOfBirth: this.form.value.dateOfBirth!.toISOString(), // TODO check it later
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

      this.usersService.updateUserData(this.userId(), result);
    }
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
