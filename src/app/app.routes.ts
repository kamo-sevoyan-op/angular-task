import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/home/homepage.component';
import { UsersComponent } from './pages/users/users.component';
import { NotFoundPageComponent } from './pages/not-found/not-found-page.component';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'user/new',
    component: UserComponent,
  },
  {
    path: 'user/:userId',
    component: UserComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
