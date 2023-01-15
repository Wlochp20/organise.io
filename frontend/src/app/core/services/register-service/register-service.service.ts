import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterInterface } from '../../interfaces/registerInterface';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject, catchError, throwError } from 'rxjs';
import { ServerResInterface } from '../../interfaces/serverResInterface';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http : HttpClient, private router : Router) { }

  private registerResUpdate = new Subject<ServerResInterface>();

  register(data : RegisterInterface) : void {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post<ServerResInterface>("http://localhost:8080/register",data,{ headers: headers })
    .pipe(catchError(this.errorHandler))
    .subscribe({
      next: (data : ServerResInterface ) => this.registerResUpdate.next(data),
      error: (error : HttpErrorResponse) => this.registerResUpdate.next(error.error),
      complete: () => console.info('complete') 
    })
  }
  registerResListener() {
    return this.registerResUpdate.asObservable();
  }
  private errorHandler( error : HttpErrorResponse ){
    return throwError(()=>{ return error });
  }
}
