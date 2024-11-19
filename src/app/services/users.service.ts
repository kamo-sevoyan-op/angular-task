import { Injectable } from '@angular/core';
import { User } from '../pages/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private data = new Map<string, User>();
  private maxIndex: number = 0;

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
    this.data.set((this.maxIndex++).toString(), user);
  }

  contains(userId: string) {
    return this.data.has(userId);
  }
}
