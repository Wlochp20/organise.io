import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { stage } from 'src/app/core/types/stage';
import { TaskServiceService } from 'src/app/core/services/task-service/task-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogServiceService } from 'src/app/core/services/dialog-service/dialog-service.service';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss']
})
export class ArrayComponent implements OnInit{

  constructor(
    private taskService : TaskServiceService,
    private route : ActivatedRoute, 
    private router : Router,
    private dialog : Dialog,
    private dialogService : DialogServiceService,
  ) {}

  boardId : number = 0; 
  currentDraggedTaskId : number = 0;
  @Input() title : stage = 'to do';
  @Input() tmpTasks : any[] = [];
  tasks : any[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((params : any) => {
      this.boardId = parseInt(params.id);
    })
    const subscription = this.taskService.getAllTasksListener().subscribe((res)=>{
      this.tasks = [];
      res.forEach((element : any)=>{
        if(element.stage == this.title){
            this.tasks.push(element);
        }
      })
      subscription.unsubscribe()
    })
  }
  elementDrag(id : number) : void {
    this.currentDraggedTaskId = id;
  }
  drop(event: CdkDragDrop<string[]>) : void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    if(event.previousContainer.id != event.container.id && this.currentDraggedTaskId != 0){
      if(event.container.id == "cdk-drop-list-0" || event.container.id == "cdk-drop-list-3"){
        this.taskService.setTaskStage(this.currentDraggedTaskId,'to do');
      }
      else if(event.container.id == "cdk-drop-list-1" || event.container.id == "cdk-drop-list-4"){
        this.taskService.setTaskStage(this.currentDraggedTaskId, 'in progress');
      }
      else if(event.container.id == "cdk-drop-list-2" || event.container.id == "cdk-drop-list-5"){
        this.taskService.setTaskStage(this.currentDraggedTaskId, 'done');
      }
    }
  }
  addTask() : void {
    this.dialogService.dashboard = true;
    this.dialogService.boardId = this.boardId;
    this.dialogService.stage = this.title;
    this.dialog.open(DialogComponent, { panelClass:'coustomDialog', disableClose: true});
    this.dialog.afterAllClosed.subscribe((res)=>{
      this.tasks = [];
      this.dialogService.tasks.forEach((element)=>{
        if(element.stage == this.title){
            this.tasks.push(element);
        }
      })
    })
  }

}
