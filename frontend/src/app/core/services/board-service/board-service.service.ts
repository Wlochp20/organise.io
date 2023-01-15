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
    let headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
    const data = { 
      id: 1,
      title:'',
      users: []
    };
    this.http.post("http://localhost:8080/addBoard",{ title : "dupa"})
    .pipe(catchError(this.errorHandler))
    .subscribe({
      next: (data : any ) => this.addBoardResUpdate.next(data),
      error: (error : HttpErrorResponse) => this.addBoardResUpdate.next(error.error),
      complete: () => console.info('complete') 
    })
  }
  getAllBoardsResListener() {
    return this.getAllBoardsResUpdate.asObservable();
  }
  addBoardResListener() {
    return this.addBoardResUpdate.asObservable();
  }
  private errorHandler( error : HttpErrorResponse ){
    return throwError(()=>{ return error });
  }
}
