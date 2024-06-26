import { Routes } from '@angular/router';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioConsultaComponent } from './usuario-consulta/usuario-consulta.component';

export const usuarioRoutes: Routes = [
  {
    path: 'usuario',
    children: [
      {
        path: 'consulta',
        component: UsuarioConsultaComponent,
      },
      {
        path: 'cadastro',
        component: UsuarioCadastroComponent,
      },
      {
        path: '',
        redirectTo: 'consulta',
        pathMatch: 'full',
      },
    ],
  },
];
