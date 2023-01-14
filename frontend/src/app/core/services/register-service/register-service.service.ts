import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterInterface } from '../../interfaces/registerInterface';
import { Subject, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http : HttpClient) { }
  private API_Register_Path : string = 'localhost:8080/register';
  registrationResUpdate = new Subject();

  private sendRegisterData(registerData : RegisterInterface) : any {
    return this.http.post<any>(this.API_Register_Path,registerData).subscribe({
      next : data => this.registrationResUpdate.next(data),
      error : err => this.registrationResUpdate.next(err),
      complete : ()=> console.info('complete')
    })
  }
  register(registerData : RegisterInterface) {
    this.sendRegisterData(registerData);
    return this.registrationResUpdate.asObservable()
  }
}
