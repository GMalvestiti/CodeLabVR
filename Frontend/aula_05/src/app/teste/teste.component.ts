import { Component, Input } from '@angular/core';

@Component({
  selector: 'cl-teste',
  standalone: true,
  imports: [],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.scss',
})
// export class TesteComponent implements OnChanges, OnInit, DoCheck {
export class TesteComponent {
  @Input({ required: true }) nomeComponenteFilho!: string;

  // @Input() set nomeComponenteFilho(payload: string) {
  //   console.log(payload);
  //   this.outroNome = payload;
  // }

  // outroNome!: string;

  // @Output() mudaNome = new EventEmitter<string>();

  // mudaNomeComponenteFilho() {
  //   this.mudaNome.emit('mudei o nome através do componente filho');
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes);
  // }

  // ngOnInit(): void {
  //   console.log('componente iniciado');
  // }

  // ngDoCheck(): void {
  //   console.log('mudei');
  // }
}
