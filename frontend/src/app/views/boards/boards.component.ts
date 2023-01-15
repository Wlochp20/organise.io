import { Component, OnInit } from '@angular/core';
import { IsUserLoggedService } from 'src/app/core/services/is-user-logged/is-user-logged.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit{
  constructor(private isUserLogged : IsUserLoggedService, private router : Router) {}
  ngOnInit(): void {
    if(!this.isUserLogged.isUserLogged()){
      this.router.navigate(['/home']);
    }
  }
}
