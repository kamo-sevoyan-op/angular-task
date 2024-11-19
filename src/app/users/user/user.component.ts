import { Component, computed, inject, input } from '@angular/core';
import { InputFormComponent } from '../../shared/input-form/input-form.component';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { User } from './user.model';
import { NotFoundComponent } from '../../pages/not-found/not-found.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [InputFormComponent, NotFoundComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  providers: [],
})
export class UserComponent {
  userId = input.required<string>();
  usersService = inject(UsersService);
  router = inject(Router);
  userExists = computed(() => this.usersService.contains(this.userId()));

  onUpdateUser(event: User) {
    this.usersService.updateUserData(this.userId(), event);
    this.router.navigate(['/users']);
  }

  onCancel() {
    this.router.navigate(['./users']);
  }
}
