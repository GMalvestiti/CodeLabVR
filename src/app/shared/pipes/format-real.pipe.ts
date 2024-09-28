import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatReal',
  standalone: true,
})
export class FormatReal implements PipeTransform {
  transform(value: string | number): string {
    return `R$ ${value}`;
  }
}
