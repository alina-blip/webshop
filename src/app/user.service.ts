import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

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
        this.router.navigate(['/login']); // Navigate to the user page
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
        catchError(this.handleError));
  // => {
        //   console.error('Login error:', error);
        //   throw new Error('not working!!!');
        //   window.alert('not wokring');
        //   return catchError(this.handleError); // Rethrow the error for the caller to handle
        // })
      // );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
