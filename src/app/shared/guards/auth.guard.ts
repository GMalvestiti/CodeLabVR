import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { LoginService } from '../../login/login.service';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  const user = loginService.currentUser;

  if (!user) {
    loginService.logout();
    return false;
  }

  if (user.admin) {
    return true;
  }

  const data = childRoute.data as { modulo: number };
  const modulo = data.modulo;

  const hasPermission = user.modulos.includes(modulo);

  if (!hasPermission) {
    router.navigate(['acesso-negado']);
    return false;
  }

  return true;
};
