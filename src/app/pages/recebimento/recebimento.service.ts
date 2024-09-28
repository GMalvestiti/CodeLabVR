import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from '../../shared/classes/base-resource/base-resource.service';
import { EAPIPath } from '../../shared/enums/api-info.enum';
import { IContaReceber } from './recebimento.interface';

@Injectable({
  providedIn: 'root',
})
export class RecebimentoService extends BaseResourceService<IContaReceber> {
  constructor(protected readonly _injectorLocal: Injector) {
    super(_injectorLocal, EAPIPath.RECEBIMENTO);
  }
}
