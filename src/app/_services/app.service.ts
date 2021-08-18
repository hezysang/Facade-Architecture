import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { User } from '../app-state/entity';
import { map, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private userLoggedIn = new Subject<boolean>();
  loginUrl='/api/login';
  signupUrl ='/api/signUp';
  constructor(private http:HttpClient) {
    this.userLoggedIn.next(false);
  }

  getUserLoggedIn(): Observable<boolean>{
    return this.userLoggedIn.asObservable();
  }

  login(user: any){
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    const options = {headers};
    return this.http.post(this.loginUrl,  {user}, options).pipe(
      map((response: Response) => response),
      catchError(err => {
        console.log(err);
        return of([]);
      })
    );
  }

  signup(user: any){
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    const options = {headers};
    return this.http.post(this.signupUrl,  {user}, options).pipe(
      map((response: Response) => response),
      catchError(err => {
        console.log(err);
        return of([]);
      })
   );

  }

}
