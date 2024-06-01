import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'cl-not-found',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  constructor(private readonly _router: Router) {}

  handleNavigation(): void {
    this._router.navigateByUrl('/home');
  }
}
