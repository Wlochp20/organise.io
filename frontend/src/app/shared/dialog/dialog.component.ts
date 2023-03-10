import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BoardServiceService } from 'src/app/core/services/board-service/board-service.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskServiceService } from 'src/app/core/services/task-service/task-service.service';
import { Router } from '@angular/router';
import { DialogServiceService } from 'src/app/core/services/dialog-service/dialog-service.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(
    private boardService : BoardServiceService, 
    public dialogRef : DialogRef,
    private dialogService : DialogServiceService,
    private taskService : TaskServiceService,
    private router : Router
  ) {}

  data = new FormControl('');
  isDataOk : boolean = true;

  closeDialog() : void {
    if(this.data.value != null && this.data.value != '' && this.dialogService.dashboard != true){
      this.boardService.addBoard(this.data.value);
      this.dialogRef.close();
    }
    if(this.data.value != null && this.data.value != '' && this.dialogService.dashboard){
      this.taskService.addTask(this.data.value, 'opis', this.dialogService.boardId, this.dialogService.stage);
      this.taskService.addTaskListener().subscribe((res)=>{
        this.taskService.getAllTasks(this.dialogService.boardId);
        this.taskService.getAllTasksListener().subscribe((res)=>{
          console.log(res)
          this.dialogService.tasks = res;
          this.dialogRef.close();
        })
      })
    }
    else{
      this.isDataOk = false;
      this.dialogRef.disableClose = undefined;
    }
  }
}
