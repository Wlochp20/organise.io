import { Component, OnInit } from '@angular/core';
import { IsUserLoggedService } from 'src/app/core/services/is-user-logged/is-user-logged.service';
import { Router } from '@angular/router';
import { BoardServiceService } from 'src/app/core/services/board-service/board-service.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit{

  constructor(
    private isUserLogged : IsUserLoggedService, 
    private router : Router,
    private boardService : BoardServiceService,
  ) {}
  username : string = this.isUserLogged.username;
  ngOnInit(): void {
    console.log(this.isUserLogged.username)
    if(!this.isUserLogged.isUserLogged){
      this.router.navigate(['/home']);
    }
    // this.boardService.addBoard('');
    // this.boardService.addBoardResListener().subscribe(data=>{
    //   console.log(data)
    // })
  }
}
