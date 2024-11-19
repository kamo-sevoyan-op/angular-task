import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsersTableComponent } from '../../components/users-table/users-table.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UsersTableComponent, MatButtonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  router = inject(Router);

  onCreateUser() {
    this.router.navigate(['/user', 'new']);
  }
}
