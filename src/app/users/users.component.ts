import { ChangeDetectorRef, Component, inject, input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { UsersService } from './users.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatMenuModule, MatIconModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersListComponent {

  usersService = inject(UsersService);
  selectedColumns = ['id', 'firstName', 'lastName', 'email', 'status', "Action"];
  dataSource = new MatTableDataSource(this.usersService.getUsersData());

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(){
    this.paginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
