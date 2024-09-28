import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from '../../shared/classes/base-resource/base-resource.service';
import { EAPIPath } from '../../shared/enums/api-info.enum';
import { ITemplate } from './template.interface';

@Injectable({
  providedIn: 'root',
})
export class TemplateService extends BaseResourceService<ITemplate> {
  constructor(protected readonly _injectorLocal: Injector) {
    // TODO: Mudar o path
    super(_injectorLocal, EAPIPath.HOME);
  }
}
