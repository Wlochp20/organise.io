import { Component, OnInit, Input } from '@angular/core';
import { BoardServiceService } from 'src/app/core/services/board-service/board-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent{

  constructor(private boardService : BoardServiceService, private router : Router) {}
  @Input() name : string = 'board'
  @Input() id : number = 0;
  deleteBoard() : void {
    console.log(this.id)
    this.boardService.deleteBoard(this.id);
  }
  openDashboard() : void {
    this.router.navigate(['/dashboard',this.id]);
  }
}
