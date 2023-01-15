import { Component, OnInit } from '@angular/core';
import { BoardServiceService } from 'src/app/core/services/board-service/board-service.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit{

  constructor(private boardService : BoardServiceService) {}
  
  ngOnInit(): void {
    this.boardService.getAllBoards();
    this.boardService.getAllBoardsResListener().subscribe((res)=>{
      console.log(res)
    })
  }
}
