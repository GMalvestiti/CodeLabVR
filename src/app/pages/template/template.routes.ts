import { Routes } from '@angular/router';
import { EMenuPermissao } from '../../shared/enums/menu-permissao.enum';
import { pendingChangesGuard } from '../../shared/guards/pending-changes.guard';
import { TemplateCadastroComponent } from './template-cadastro/template-cadastro.component';
import { TemplateConsultaComponent } from './template-consulta/template-consulta.component';

export const templateRoutes: Routes = [
  {
    path: 'template',
    data: {
      // TODO: Mudar a permissão
      modulo: EMenuPermissao.HOME,
    },
    children: [
      {
        path: 'consulta',
        component: TemplateConsultaComponent,
      },
      {
        path: 'cadastro',
        component: TemplateCadastroComponent,
        canDeactivate: [pendingChangesGuard],
      },
      {
        path: 'editar/:id',
        component: TemplateCadastroComponent,
        canDeactivate: [pendingChangesGuard],
      },
      {
        path: '**',
        redirectTo: 'consulta',
        pathMatch: 'full',
      },
    ],
  },
];
