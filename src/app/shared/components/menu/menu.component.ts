import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { IMenuPermissao } from '../../interfaces/menu-permissao.interface';
import { menuPermissao } from '../../constants/menu-permissao';
import { LoginService } from '../../../login/login.service';

@Component({
  selector: 'cl-menu',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  constructor(
    private readonly _router: Router,
    private readonly _loginService: LoginService,
  ) {}

  menuItems: IMenuPermissao[] = [];

  ngOnInit(): void {
    this.handleMenuItems();
  }

  handleNavigation(path: string): void {
    this._router.navigateByUrl(path);
  }

  private handleMenuItems() {
    const user = this._loginService.currentUser;
    
    this.menuItems = menuPermissao.filter((item) => {
      return user?.admin || user?.modulos.includes(item.modulo);
    });
  }
}
