import { Injectable } from '@angular/core';
import { stage } from '../../types/stage';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  constructor() { }
  dashboard : boolean = false;
  stage : stage = 'to do';
  boardId : number = 0;
  tasks : any[] = []
}
