import { Component, computed, inject, input } from '@angular/core';
import { InputFormComponent } from '../../components/input-form/input-form.component';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './user.model';
import { NotFoundComponent } from '../../components/not-found/not-found.component';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [InputFormComponent, NotFoundComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  providers: [],
})
export class UserComponent {
  activatedRoute = inject(ActivatedRoute);
  routePath = this.activatedRoute.snapshot.routeConfig?.path || '';

  userExists = computed(() => this.usersService.contains(this.userId()));
  isNewUser = computed(() => this.routePath === 'user/new');
  submitButtonName = computed(() => (this.isNewUser() ? 'Submit' : 'Update'));

  userId = input.required<string>();

  usersService = inject(UsersService);
  router = inject(Router);

  updateUser(event: User) {
    this.usersService.updateUserData(this.userId(), event);
    this.router.navigate(['/users']);
  }

  createUser(event: User) {
    this.usersService.addUser(event);
    this.router.navigate(['/users']);
  }

  onUserEvent(event: User) {
    if (this.isNewUser()) {
      this.createUser(event);
    } else {
      this.updateUser(event);
    }
  }

  onCancel() {
    this.router.navigate(['/users']);
  }
}
