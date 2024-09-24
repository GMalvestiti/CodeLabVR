import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './shared/components/layout/layout.component';

@Component({
  selector: 'cl-root',
  standalone: true,
  imports: [HomeComponent, LayoutComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  titulo = 'Code Lab';
}
