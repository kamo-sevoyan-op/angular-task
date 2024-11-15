import { Component, inject } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { UsersService } from './users.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersListComponent {
  useListService = inject(UsersService)
}
