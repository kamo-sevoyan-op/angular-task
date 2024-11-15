import { Component, inject, input } from '@angular/core';
import { InputFormComponent } from '../../shared/input-form/input-form.component';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [InputFormComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  providers: [],
})
export class UserComponent {
  userId = input<string>();
  usersService = inject(UsersService);
  router = inject(Router);

  onUpdateUser(event: User) {
    this.usersService.updateUserData(this.userId()!, event);
    this.router.navigate(['/users']);
  }
}
