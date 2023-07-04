import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'

export interface User {
  name: string;
  surname: string;
  street: string;
  housenumber: string;
  postalcode: string;
  country: string;
  mail: string;
  password: string;
}
export interface LoginData {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}
  addUser(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:8080/user`, user);
  }

  login(loginData: LoginData): Observable<LoginData> {
    return this.http
      .post<LoginData>(`http://localhost:8080/user/login`, loginData).pipe(
        tap((response: LoginData) => {
          console.log('Login successful:', response);
          this.router.navigate(['/user']); // Navigate to the user page
        }),
        catchError((error: HttpErrorResponse) => {
          console.error('Login error:', error);
          return throwError(error); // Rethrow the error for the caller to handle
        })
      );
  }
}
