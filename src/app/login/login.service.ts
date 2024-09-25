import { Injectable } from '@angular/core';
import { ILogin } from './login.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { IUsuario } from '../pages/usuario/usuario.interface';
import { Router } from '@angular/router';

const JWT_KEY = 'jwt-key';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private url = `http://localhost:${EAPIPort.USUARIO}/api/v1/${EAPIPath.USUARIO}/auth`;
  // TODO: Change the url to use the environment variable
  // private url = `${enviroment.baseUrl}/${EAPIPath.USUARIO}/auth`;

  // constructor(private readonly _http: HttpClient) {}
  constructor(private readonly _router: Router) {}

  JWTHelper = new JwtHelperService();
  currentUser = new BehaviorSubject<IUsuario | null>(null);

  get isLoggedIn(): boolean {
    return !!this.currentUser.getValue();
  }

  login(payload: ILogin) {
    console.log(payload);

    const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiR3VzdGF2byBNYWx2ZXN0aXRpIiwiZW1haWwiOiJndXN0YXZvLnNtYWx2ZXN0aXRpQGdtYWlsLmNvbSIsInNlbmhhIjoiMTIzNDU2IiwiYXRpdm8iOnRydWUsImFkbWluIjp0cnVlLCJwZXJtaXNzYW8iOlt7Im1vZHVsbyI6MX0seyJtb2R1bG8iOjJ9XX0.d0IVH6BWm0NuNMLLh4zloojK3WDrLwgiWLknj8gMqzg';

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
    this._router.navigate(['/login']);
  }

  setLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getLocalStorage(key: string): string | null {
    return localStorage.getItem(key);
  }

  private handleLogin(payload: any) {
    const user: IUsuario | null = this.JWTHelper.decodeToken(payload);
    this.currentUser.next(user);
    this._router.navigate(['/']);
  }
}
