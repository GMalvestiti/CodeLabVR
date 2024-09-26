import { Component } from '@angular/core';
import { BackActionComponent } from '../../../shared/components/action-bar/back-action/back-action.component';
import { SaveActionComponent } from '../../../shared/components/action-bar/save-action/save-action.component';
import { SaveAddActionComponent } from '../../../shared/components/action-bar/save-add-action/save-add-action.component';
import { PageLayoutComponent } from '../../../shared/components/page-layout/page-layout.component';

@Component({
  selector: 'cl-usuario-cadastro',
  standalone: true,
  imports: [
    PageLayoutComponent,
    BackActionComponent,
    SaveActionComponent,
    SaveAddActionComponent,
  ],
  templateUrl: './usuario-cadastro.component.html',
  styleUrl: './usuario-cadastro.component.scss',
})
export class UsuarioCadastroComponent {}
