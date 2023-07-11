import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'
import { Original } from './original.service'

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
    return this.http.post<User>(`http://localhost:8080/user`, user).pipe(
      tap((response: User) => {
        console.log('Registration successful:', response);
        this.router.navigate(['/user']); // Navigate to the user page
      })
    );
  }

  getUserById(id: number) {
    return this.http.get<User>(`http://localhost:8080/user/${id}`).pipe(
      map((response) => {
        return {
          name: response.name,
          surname: response.surname,
          street: response.street,
          housenumber: response.housenumber,
          postalcode: response.postalcode,
          country: response.country,
          mail: response.mail,
          password: response.password,
        };
      })
    );
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




