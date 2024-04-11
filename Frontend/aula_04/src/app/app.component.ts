import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MudaBackgroundDirective } from './muda-background.directive';
import { TestePipe } from './teste.pipe';

@Component({
  selector: 'cl-root',
  standalone: true,
  imports: [CommonModule, MudaBackgroundDirective, TestePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  nome = 'Gustavo';

  condition = true;

  conditionClasse = true;

  number = 2;

  array = ['maçã', 'pera', 'banana'];

  arrayDeClasses = ['classe-teste', 'classe-teste2'];

  colorNgStyle = 'brown';

  today = new Date();
  dinehiro = 26.7;
  promise = new Promise((resolve) => {
    setTimeout(() => resolve('Promise resolvida'), 3000);
  });

  printaNome() {
    console.log(this.nome);
  }
}
