import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Subject, catchError, throwError } from 'rxjs';
import { LoginResInterface } from '../../interfaces/loginInterface';

@Injectable({
  providedIn: 'root'
})
export class BoardServiceService {

  constructor(private http : HttpClient) { }

  private getAllBoardsResUpdate = new Subject<LoginResInterface>();
  private addBoardResUpdate = new Subject<any>();
  private deleteBoardResUpdate = new Subject<any>();

  getAllBoards() : void {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.get<any>("http://localhost:8080/getAllBoards")
    .pipe(catchError(this.errorHandler))
    .subscribe({
      next: (data : any ) => this.getAllBoardsResUpdate.next(data),
      error: (error : HttpErrorResponse) => this.getAllBoardsResUpdate.next(error.error),
      complete: () => console.info('complete') 
    })
  }
  addBoard(name : string) : void {
    this.http.post("http://localhost:8080/addBoard",{ title : name})
    .pipe(catchError(this.errorHandler))
    .subscribe({
      next: (data : any ) => this.addBoardResUpdate.next(data),
      error: (error : HttpErrorResponse) => this.addBoardResUpdate.next(error.error),
      complete: () => console.info('complete') 
    })
  }
  deleteBoard(id : number) : void {;
    this.http.post(`http://localhost:8080/deleteBoard`, id)
    .pipe(catchError(this.errorHandler))
    .subscribe({
      next: (data : any ) => this.deleteBoardResUpdate.next(data),
      error: (error : HttpErrorResponse) => this.deleteBoardResUpdate.next(error.error),
      complete: () => console.info('complete') 
    })
  }
  getAllBoardsResListener() {
    return this.getAllBoardsResUpdate.asObservable();
  }
  addBoardResListener() {
    return this.addBoardResUpdate.asObservable();
  }
  deleteBoardResListener() {
    return this.deleteBoardResUpdate.asObservable();
  }
  private errorHandler( error : HttpErrorResponse ){
    return throwError(()=>{ return error });
  }
}
