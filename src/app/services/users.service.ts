//data service
import { EventEmitter, Injectable } from '@angular/core';

//importa o serviço de login
import { CounterService } from './counter.service';

//indica que esta classe injeta outra
@Injectable()

export class UsersService {
    users = [
    {
         name: 'Max',
         status: true
    },
    {
         name: 'Anna',
         status: true
    },
    {
         name: 'Chris',
         status: false
    },
    {
         name: 'Manu',
         status: false
    }
    ];

    //injeta o serviço de contador
    constructor(private counterService: CounterService) {}

    changeUserStatus(id: number, status: boolean) {
      this.users[id].status = status;
      this.counterService.incremetnStatusChange();
    }
}