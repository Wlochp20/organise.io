import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  constructor() { }
  dashboard : boolean = false;
  boardId : number = 0;
}
