import { Component,  OnInit } from '@angular/core';

import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  //styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
   users: {name: string, status: boolean}[];

//inicializa o serviço
  constructor(private usersService: UsersService) {
  }

//inicia copiando linkando os users com o serviço
  ngOnInit() {
     this.users = this.usersService.users;
  }

//altera status
  changeUserStatus(id: number, status: boolean) {
    this.usersService.changeUserStatus(id, status);
  }
}
