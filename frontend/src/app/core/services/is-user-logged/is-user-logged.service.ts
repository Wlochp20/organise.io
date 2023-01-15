import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsUserLoggedService {
  constructor() { }
  isUserLogged : boolean = false;
  username : string = '';
}
