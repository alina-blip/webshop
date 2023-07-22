import { Injectable } from '@angular/core';

export interface Admin {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}
