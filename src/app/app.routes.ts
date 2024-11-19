import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/home/homepage.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';
import { NotFoundPageComponent } from './pages/not-found/not-found-page.component';
import { NewUserComponent } from './components/users/new-user/new-user.component';

export const routes: Routes = [
    {
        path: "",
        component: HomepageComponent
    },
    {
        path: "users",
        component: UsersComponent
    },
    {
        path: "new-user",
        component: NewUserComponent
    },
    {
        path: "user/:userId",
        component: UserComponent
    },
    {
        path: "**",
        component: NotFoundPageComponent
    }
];
