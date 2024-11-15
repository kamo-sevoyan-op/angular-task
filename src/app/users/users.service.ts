import { Injectable, OnInit } from '@angular/core';
import { User } from './user/user.model';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private data = new Map<string, User>();

  constructor() {
    this.data.set('0', {
      email: 'kamo.sevoyan.am@gmail.com',
      dateOfBirth: '1998 06 13',
      firstName: 'Kamo',
      middleName: 'Koryun',
      lastName: 'Sevoyan',
      status: 'Active',
      profileImageUrl: 'localhost:4000/img.png',
      nationality: 'armenian',
      phoneNumber: '+37493047450',
      gender: 'male',
      mainLanguage: 'en',
      recitations: 'none',
    });

    this.data.set('1', {
      email: 'adam.eva.snake@heaven.jw',
      dateOfBirth: '1967 1 1',
      firstName: 'Adam',
      middleName: 'Eva',
      lastName: 'Snake',
      status: 'Active',
      profileImageUrl: 'localhost:4000/img.png',
      nationality: 'armenian',
      phoneNumber: '+37493047450',
      gender: 'male',
      mainLanguage: 'en',
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
}
