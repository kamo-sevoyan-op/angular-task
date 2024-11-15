import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { FallbackComponent } from './fallback/fallback.component';
import { NewUserComponent } from './users/new-user/new-user.component';

export const routes: Routes = [
    {
        path: "",
        component: HeaderComponent
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
        component: FallbackComponent
    }
];
