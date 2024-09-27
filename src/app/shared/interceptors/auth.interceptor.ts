import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, throwError } from 'rxjs';
import { LoginService } from '../../login/login.service';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { EMensagem } from '../enums/mensagem.enum';
import { ESnackbarType } from '../enums/snackbar-type.enum';
import { ISnackBarData } from '../interfaces/snackbar-data.interface';

const KONG_MESSAGES = [
  `No credentials found for given 'iss'`,
  `Invalid Signature`,
  `Invalid signature`,
  `token expired`,
];

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const loginService = inject(LoginService);
  const snackBar = inject(MatSnackBar);
  const jwt = loginService.getJWT();

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  return next(authReq).pipe(
    catchError((error) => {
      const errorObject = error.error;

      console.log('errorObject', errorObject);

      if (KONG_MESSAGES.includes(errorObject.message || errorObject.exp)) {
        openSnackBar(snackBar, {
          message: EMensagem.SESSAO_EXPIRADA,
          buttonText: EMensagem.FECHAR,
          type: ESnackbarType.warning,
        });
        loginService.logout();
      } else {
        openSnackBar(snackBar, {
          message: errorObject.message || EMensagem.ALGO_DEU_ERRADO,
          buttonText: EMensagem.FECHAR,
          type: ESnackbarType.error,
        });
      }

      return throwError(() => error);
    }),
  );
};

function openSnackBar(snackBar: MatSnackBar, data: ISnackBarData) {
  snackBar.openFromComponent<SnackbarComponent, ISnackBarData>(
    SnackbarComponent,
    {
      duration: 5 * 1000,
      data,
      panelClass: data.type,
      horizontalPosition: 'end',
    },
  );
}
