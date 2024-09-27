import { Routes } from '@angular/router';
import { EMenuPermissao } from '../shared/enums/menu-permissao.enum';
import { authGuard } from '../shared/guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { usuarioRoutes } from './usuario/usuario.routes';

export const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        data: {
          modulo: EMenuPermissao.HOME,
        },
        component: HomeComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      ...usuarioRoutes,
    ],
    canActivateChild: [authGuard],
  },
];
