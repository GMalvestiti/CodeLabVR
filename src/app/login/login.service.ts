import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { IUsuario } from '../pages/usuario/usuario.interface';
import { ILogin } from './login.interface';

const JWT_KEY = 'jwt-key';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // private url = `http://localhost:${EAPIPort.USUARIO}/api/v1/${EAPIPath.USUARIO}/auth`;
  // TODO: Change the url to use the environment variable
  // private url = `${enviroment.baseUrl}/${EAPIPath.USUARIO}/auth`;

  // constructor(private readonly _http: HttpClient) {}
  constructor(private readonly _router: Router) {
    this.handleCurrentSession();
  }

  JWTHelper = new JwtHelperService();
  currentUser = new BehaviorSubject<IUsuario | null>(null);

  get isLoggedIn(): boolean {
    return !!this.currentUser.getValue();
  }

  private handleCurrentSession(): void {
    const jwt: string | null = this.getLocalStorage(JWT_KEY);

    if (!jwt) return;

    try {
      const user: IUsuario | null = this.JWTHelper.decodeToken(jwt);
      console.log(user);
      this.currentUser.next(user);
    } catch (error) {
      this.logout();
    }
  }

  login(payload: ILogin) {
    const jwt =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsImVtYWlsIjoiZ3VzdGF2by5zbWFsdmVzdGl0aUBnbWFpbC5jb20iLCJub21lIjoiR3VzdGF2byBNYWx2ZXN0aXRpIiwiYWRtaW4iOnRydWUsIm1vZHVsb3MiOlsxLDJdLCJpYXQiOjE3MjczMDc3NzAsImV4cCI6MTcyNzM1MDk3MCwiaXNzIjoiSk1EQWp4UktldDI4eEhONWhDTDJXanl2RHFYWVFUckUifQ.CvakmZrtkoNjHUNPxbxvCBJmDPnTzU0mZHHZvObMDSg';

    this.handleLogin(jwt);
    // return this._http
    //   .post<IResponse<string>>(`${this.url}/login`, payload)
    //   .pipe(
    //     take(1),
    //     tap((response) => this.handleLogin(response.data)),
    //   );
  }

  logout() {
    this.currentUser.next(null);
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
    const user: IUsuario | null = this.JWTHelper.decodeToken(jwt);
    this.currentUser.next(user);
    this.setLocalStorage(JWT_KEY, jwt);
    this._router.navigate(['/']);
  }
}
