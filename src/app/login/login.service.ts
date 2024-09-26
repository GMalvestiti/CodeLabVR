import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, take, tap } from 'rxjs';
import { ILogin, IUsuarioJWT } from './login.interface';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../enviroments/enviroment';
import { EAPIPath } from '../shared/enums/api-info.enum';
import { IResponse } from '../shared/interfaces/response.interface';

const JWT_KEY = 'jwt-key';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = `${enviroment.baseUrl}/${EAPIPath.USUARIO}/auth`;

  constructor(
    private readonly _router: Router,
    private readonly _http: HttpClient,
  ) {
    this.handleCurrentSession();
  }

  JWTHelper = new JwtHelperService();
  currentUserSubject = new BehaviorSubject<IUsuarioJWT | null>(null);

  get currentUser(): IUsuarioJWT | null {
    return this.currentUserSubject.getValue();
  }

  private handleCurrentSession(): void {
    const jwt: string | null = this.getLocalStorage(JWT_KEY);

    if (!jwt) return;

    try {
      const user: IUsuarioJWT | null = this.JWTHelper.decodeToken(jwt);
      console.log(user);
      this.currentUserSubject.next(user);
    } catch (error) {
      this.logout();
    }
  }

  login(payload: ILogin) {
    return this._http
      .post<IResponse<string>>(`${this.url}/login`, payload)
      .pipe(
        take(1),
        tap((response) => this.handleLogin(response.data)),
      );
  }

  logout() {
    this.currentUserSubject.next(null);
    this.removeLocalStorage(JWT_KEY);
    this._router.navigate(['/login']);
  }

  private removeLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }

  private setLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  private getLocalStorage(key: string): string | null {
    return localStorage.getItem(key);
  }

  private handleLogin(jwt: any) {
    const user: IUsuarioJWT | null = this.JWTHelper.decodeToken(jwt);
    this.currentUserSubject.next(user);
    this.setLocalStorage(JWT_KEY, jwt);
    this._router.navigate(['/']);
  }
}
