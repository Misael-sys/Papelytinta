import { Users } from './users';
import { environment } from '../../environments/environment';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class LoginService {
  redirectUrl: string;

  baseUrl = environment.baseUrl

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient,private cookies: CookieService) { }

  public loginUsuario(email, password) {
    //alert(username) //aparece el usuario de la persona que metio los datos
    return this.http.post<any>(this.baseUrl + '/login.php', { email, password })
    ;
    }

    setToken(token: string) {
      this.cookies.set('token', token);
    }
    getToken() {
      return this.cookies.get('token');
    }

}
