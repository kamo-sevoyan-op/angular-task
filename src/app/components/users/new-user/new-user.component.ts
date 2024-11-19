import { Component, inject } from '@angular/core';
import { InputFormComponent } from '../../input-form/input-form.component';
import { User } from '../user/user.model';
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [InputFormComponent, MatButtonModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css',
})
export class NewUserComponent {
  userService = inject(UsersService);
  router = inject(Router);

  onCreateUser(event: User) {
    this.userService.addUser(event);
    this.router.navigate(['/users']);
  }

  onCancel() {
    this.router.navigate(['./users']);
  }
}
