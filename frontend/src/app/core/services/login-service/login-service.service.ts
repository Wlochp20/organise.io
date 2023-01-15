import { Injectable } from '@angular/core';
import { RegisterInterface } from '../../interfaces/registerInterface';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Subject, catchError, throwError } from 'rxjs';
import { RegisterResInterface } from '../../interfaces/registerInterface';
import { LoginInterface } from '../../interfaces/loginInterface';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http : HttpClient) { }
  private loginResUpdate = new Subject<RegisterResInterface>();

  login(data : LoginInterface) : void {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post<RegisterResInterface>("http://localhost:8080/login",data,{ headers: headers })
    .pipe(catchError(this.errorHandler))
    .subscribe({
      next: (data : RegisterResInterface ) => this.loginResUpdate.next(data),
      error: (error : HttpErrorResponse) => this.loginResUpdate.next(error.error),
      complete: () => console.info('complete') 
    })
  }
  loginResListener() {
    return this.loginResUpdate.asObservable();
  }
  private errorHandler( error : HttpErrorResponse ){
    return throwError(()=>{ return error });
  }
}
