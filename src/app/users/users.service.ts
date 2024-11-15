import { Injectable, OnInit } from '@angular/core';
import { User } from './user/user.model';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private data = new Map<string, User>();
  private maxIndex: number = 1;

  constructor() {
    this.data.set('0', {
      email: 'albert.einstein.ge@gmail.ge',
      dateOfBirth: '1921 11 06',
      firstName: 'Albert',
      middleName: 'Einstein',
      lastName: 'Einstein',
      status: 'Active',
      profileImageUrl:
        'https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg',
      nationality: 'german',
      phoneNumber: '+123456789',
      gender: 'male',
      mainLanguage: 'ge',
      recitations: 'none',
    });

    this.data.set('1', {
      email: 'max.plank.ge@gmail.ge',
      dateOfBirth: '1967 1 1',
      firstName: 'Max',
      middleName: 'Planck',
      lastName: 'Planck',
      status: 'Active',
      profileImageUrl:
        'https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg',
      nationality: 'german',
      phoneNumber: '+123456789',
      gender: 'male',
      mainLanguage: 'ge',
      recitations: 'none',
    });
  }

  getDataById(userId: string) {
    return this.data.get(userId);
  }

  updateUserData(userId: string, user: User) {
    this.data.set(userId, user);
  }

  getUsersData() {
    const userArray = Array.from(this.data, ([id, user]) => ({
      id: id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      status: user.status,
    }));

    return userArray;
  }

  addUser(user: User) {
    this.data.set((++this.maxIndex).toString(), user);
  }
}
