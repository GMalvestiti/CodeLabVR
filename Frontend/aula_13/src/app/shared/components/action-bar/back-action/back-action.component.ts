import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'cl-back-action',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './back-action.component.html',
  styleUrl: './back-action.component.scss',
})
export class BackActionComponent {
  constructor(private readonly _location: Location) {}

  back(): void {
    this._location.back();
  }
}
