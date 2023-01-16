import { Component, OnInit } from '@angular/core';
import { IsUserLoggedService } from 'src/app/core/services/is-user-logged/is-user-logged.service';
import { Router } from '@angular/router';
import { BoardServiceService } from 'src/app/core/services/board-service/board-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { DialogRef } from '@angular/cdk/dialog';
import { DialogServiceService } from 'src/app/core/services/dialog-service/dialog-service.service';

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
    public dialog: MatDialog,
    private dialogService : DialogServiceService
  ) {}
  username : string = this.isUserLogged.username;
  boards : any
  ngOnInit(): void {
    if(!this.isUserLogged.isUserLogged){
      this.router.navigate(['/home']);
    }
    this.getAllBoards();
    this.boardService.deleteBoardResListener().subscribe((res)=>{
      this.getAllBoards();
    });
    this.dialogService.dashboard = false;
  }
  addNewBoard() : void {
    this.dialog.open(DialogComponent, { panelClass:'coustomDialog', disableClose: true, data: {
      dasboard: false
    }});
    this.boardService.addBoardResListener().subscribe(data=>{
      this.getAllBoards();
    })
  }
  getAllBoards() : void {
    this.boardService.getAllBoards();
    this.boardService.getAllBoardsResListener().subscribe((res)=>{
      this.boards = res;
    });
  }
}
