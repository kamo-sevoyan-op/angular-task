import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
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
        component: NotFoundComponent
    }
];
