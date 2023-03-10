import { Injectable } from '@angular/core';
import { RegisterInterface } from '../../interfaces/registerInterface';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Subject, catchError, throwError } from 'rxjs';
import { LoginResInterface } from '../../interfaces/loginInterface';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http : HttpClient) { }

  private registerResUpdate = new Subject<LoginResInterface>();

  register(data : RegisterInterface) : void {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post<LoginResInterface>("http://localhost:8080/register",data,{ headers: headers })
    .pipe(catchError(this.errorHandler))
    .subscribe({
      next: (data : LoginResInterface ) => this.registerResUpdate.next(data),
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
