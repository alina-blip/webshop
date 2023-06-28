import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs'
import { HttpClient } from '@angular/common/http'

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
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  addUser(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:8080/user`, user);
  }
}
