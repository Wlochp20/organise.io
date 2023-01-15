import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsUserLoggedService {
  constructor() { }
  private user : boolean = false;
  setUser( activtiy : boolean ) : void {
    this.user = activtiy;
  }
  isUserLogged() : boolean {
    return this.user;
  }
}
