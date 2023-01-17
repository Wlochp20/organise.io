import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { IsUserLoggedService } from 'src/app/core/services/is-user-logged/is-user-logged.service';
import { Router } from '@angular/router';
import { TaskServiceService } from 'src/app/core/services/task-service/task-service.service';
import { stage } from 'src/app/core/types/stage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  constructor(
    private route : ActivatedRoute, 
    private isUserLogged : IsUserLoggedService, 
    private router : Router,
    private taskService : TaskServiceService,
  ) {}

  username : string = this.isUserLogged.username;
  arrays : stage[] = ['to do', 'in progress', 'done'];
  tasks : any[] = [];
  boardId : number = 0;

  ngOnInit(): void {
    if(!this.isUserLogged.isUserLogged){
      this.router.navigate(['/home']);
    }
    this.route.params.subscribe((params : any) => {
      this.boardId = parseInt(params.id);
    })
    this.taskService.getAllTasks(this.boardId);
    const subscription = this.taskService.getAllTasksListener().subscribe((res)=>{
      this.tasks = res;
      subscription.unsubscribe()
    })
  }
}
