import { Routes } from '@angular/router';
import { EMenuPermissao } from '../shared/enums/menu-permissao.enum';
import { HomeComponent } from './home/home.component';
import { usuarioRoutes } from './usuario/usuario.routes';

export const pagesRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      modulo: EMenuPermissao.HOME,
    },
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  ...usuarioRoutes,
];
