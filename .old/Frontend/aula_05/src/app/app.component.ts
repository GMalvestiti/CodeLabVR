import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  OnDestroy,
} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { Teste1Component } from './teste1/teste1.component';
import { Teste2Component } from './teste2/teste2.component';

@Component({
  selector: 'cl-root',
  standalone: true,
  imports: [HeaderComponent, Teste1Component, Teste2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent
  implements AfterContentInit, AfterContentChecked, OnDestroy
{
  @ContentChild('cl-teste1') conteudo!: Teste1Component;

  titulo = 'Code Lab';

  ngOnDestroy(): void {
    console.log('componente destruído');
  }

  ngAfterContentInit() {
    console.log(this.conteudo);
  }

  ngAfterContentChecked(): void {
    console.log(this.conteudo);
  }
}

// export class AppComponent implements AfterViewInit, AfterContentChecked {
//   nomeComponentePai = 'Code Lab';

//   // @ViewChild(TesteComponent) testeComponent!: TesteComponent;
//   // @ViewChild('paragrafoRef') paragrapoRef!: ElementRef;
//   // @ViewChildren(TesteComponent) testeComponentList!: QueryList<TesteComponent>;
//   @ViewChild('dinamico', { read: ViewContainerRef }) _vcr!: ViewContainerRef;

//   constructor(private _cd: ChangeDetectorRef) {}

//   mudaNomeComponentePai(value: string) {
//     this.nomeComponentePai = value;
//   }

//   ngAfterViewInit(): void {
//     // console.log(this.testeComponent);
//     // this.testeComponent.outroNome = 'mudado pelo after view init';
//     // this._cd.detectChanges();

//     // setTimeout(() => {
//     //   this.paragrapoRef.nativeElement.innerText = 'texto teste';
//     // }, 3000);

//     // console.log(this.testeComponentList.forEach((el) => console.log(el))); // first, last, get(0)

//     const component = this._vcr.createComponent(TesteComponent);
//     component.instance.nomeComponenteFilho = 'mudei aqui';
//   }

//   ngAfterContentChecked(): void {
//     // Após a primeira checagem do angular
//   }
// }
