import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { UsersService } from './users.service';
import { MatTableDataSource } from '@angular/material/table';
import {
  MatPaginator,
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  usersService = inject(UsersService);
  selectedColumns = [
    'id',
    'firstName',
    'lastName',
    'email',
    'status',
    'Action',
  ];
  dataSource = new MatTableDataSource(this.usersService.getUsersData());
  router = inject(Router);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {
    this.paginator = new MatPaginator(
      new MatPaginatorIntl(),
      ChangeDetectorRef.prototype
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  goToUser(id: any) {
    this.router.navigate(['/user', id]);
  }

  onCreateUser() {
    this.router.navigate(['/new-user']);
  }
}
