import { Routes } from '@angular/router';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { pagesRoutes } from './pages/pages.routes';

export const routes: Routes = [
  ...pagesRoutes,
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: 'acesso-negado',
    component: AccessDeniedComponent,
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];
