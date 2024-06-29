import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from '../shared/components/layout/layout.component';

@Component({
  selector: 'cl-pages',
  standalone: true,
  imports: [LayoutComponent, RouterOutlet],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss',
})
export class PagesComponent {
  titulo = 'Code Lab';
}
