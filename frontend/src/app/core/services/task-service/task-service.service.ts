import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Subject, catchError, throwError } from 'rxjs';
import { stage } from '../../types/stage';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http : HttpClient) { }

  private getAllTasksResUpdate = new Subject<any>();
  private addTaskResUpdate = new Subject<any>();
  private setTaskStageResUpdate = new Subject<any>();

  getAllTasks(borderId : number) : void {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post<any>("http://localhost:8080/getAllTasks",borderId)
    .pipe(catchError(this.errorHandler))
    .subscribe({
      next: (data : any ) => this.getAllTasksResUpdate.next(data),
      error: (error : HttpErrorResponse) => this.getAllTasksResUpdate.next(error.error),
      complete: () => console.info('complete') 
    })
  }
  addTask(title : string, content : string, borderId : number, stage : stage) : void {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post<any>("http://localhost:8080/addTask",{
      "title":title,
      "content":content,
      "boardID": borderId,
      "stage": stage
  })
    .pipe(catchError(this.errorHandler))
    .subscribe({
      next: (data : any ) => this.addTaskResUpdate.next(data),
      error: (error : HttpErrorResponse) => this.addTaskResUpdate.next(error.error),
      complete: () => console.info('complete') 
    })
  }
  setTaskStage(taskId : number, stage : stage) : void {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post<any>("http://localhost:8080/setStage",{
      id : taskId,
      stage : stage
    })
    .pipe(catchError(this.errorHandler))
    .subscribe({
      next: (data : any ) => this.setTaskStageResUpdate.next(data),
      error: (error : HttpErrorResponse) => this.setTaskStageResUpdate.next(error.error),
      complete: () => console.info('complete') 
    })
  }
  getAllTasksListener() {
    return this.getAllTasksResUpdate.asObservable()
  }
  addTaskListener() {
    return this.addTaskResUpdate.asObservable()
  }
  setTaskStageListener() {
    return this.setTaskStageResUpdate.asObservable()
  }
  private errorHandler( error : HttpErrorResponse ){
    return throwError(()=>{ return error });
  }
}
