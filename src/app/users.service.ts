//data service
import { EventEmitter, Injectable } from '@angular/core';

//importa o serviço de login
import { CounterService } from './counter.service';

@Injectable()
export class UsersService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

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

    //evento para quando for emitido um evento
    //userUpdated = new EventEmitter<string>();

    constructor(private counterService: CounterService) {}

    changeUserStatus(id: number, status: boolean) {
      this.users[id].status = status;
      this.counterService.incremetnStatusChange();
    }
}