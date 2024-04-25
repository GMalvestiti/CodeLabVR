import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teste',
  standalone: true,
  pure: true,
})
export class TestePipe implements PipeTransform {
  transform(value: unknown, teste1 = 0, teste2 = 'hello world!'): string {
    return `${String(value)} meu pipe te transformou! ${teste1} ${teste2}`;
  }
}
