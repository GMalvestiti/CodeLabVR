import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss"
})
export class AppComponent {
  title = "codelab";
  nome = "Gustavo";
  getNome() {
    return this.nome;
  };
  alert() {
    // alert(this.nome);
    console.log(this.nome);
  };
}
