import { Component, OnInit } from '@angular/core';
import { AddActionComponent } from '../../../shared/components/action-bar/add-action/add-action.component';
import { BackActionComponent } from '../../../shared/components/action-bar/back-action/back-action.component';
import { PageLayoutComponent } from '../../../shared/components/page-layout/page-layout.component';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'cl-usuario-consulta',
  standalone: true,
  imports: [PageLayoutComponent, BackActionComponent, AddActionComponent],
  templateUrl: './usuario-consulta.component.html',
  styleUrl: './usuario-consulta.component.scss',
})
export class UsuarioConsultaComponent implements OnInit {
  constructor(private readonly _service: UsuarioService) {}

  ngOnInit(): void {
    this._service.findAll().then((data) => {
      console.log(data);
    });
  }
}
