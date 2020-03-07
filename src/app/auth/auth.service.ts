import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logged = false;

  constructor() {}

  get isLogged(): boolean {
    return this.logged;
  }
}
