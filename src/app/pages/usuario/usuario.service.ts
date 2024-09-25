import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from '../../shared/classes/base-resource/base-resource.service';
import { EAPIPath, EAPIPort } from '../../shared/enums/api-info.enum';
import { IUsuario } from './usuario.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService extends BaseResourceService<IUsuario> {
  constructor(protected readonly _injectorLocal: Injector) {
    // TODO: remove port
    super(_injectorLocal, EAPIPort.USUARIO, EAPIPath.USUARIO);
  }
}
