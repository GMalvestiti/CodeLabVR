import { Component } from '@angular/core';
import { AddActionComponent } from '../../../shared/components/action-bar/add-action/add-action.component';
import { BackActionComponent } from '../../../shared/components/action-bar/back-action/back-action.component';
import { PageLayoutComponent } from '../../../shared/components/page-layout/page-layout.component';

@Component({
  selector: 'cl-usuario-consulta',
  standalone: true,
  imports: [PageLayoutComponent, BackActionComponent, AddActionComponent],
  templateUrl: './usuario-consulta.component.html',
  styleUrl: './usuario-consulta.component.scss',
})
export class UsuarioConsultaComponent {}
