import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { retryWhen, delay, take, concat, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private serverUrl: string = 'http://localhost:3000/authentication';
  constructor(private  http: HttpClient) {}

  public getGoogleUrl(): Observable<any> {
    return this.http.get(`${this.serverUrl}/googleUrl`).pipe(map((res: Response) => res));
  }

  public getByCookie(cookie): Observable<any> {
    console.log('cookie', cookie);
    return this.http.post(`${this.serverUrl}/getByCookie`, { cookie }).pipe(map((res: Response) => res));
  }


  public tryTogetTokens() {
    return this.http.get(`${this.serverUrl}/getTokens`)
        .pipe(
           map((res: Response) => res),
           tap(elm => {
              if (!elm) {
                throw new Error();
              }
              console.log(elm);
           }),
           retryWhen(errors => errors.pipe(delay(1000), take(10), concat(throwError(errors))))
           );
  }
}
