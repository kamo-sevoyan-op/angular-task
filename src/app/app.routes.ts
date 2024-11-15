import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UsersListComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { FallbackComponent } from './fallback/fallback.component';

export const routes: Routes = [
    {
        path: "",
        component: HeaderComponent
    },
    {
        path: "users",
        component: UsersListComponent
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
