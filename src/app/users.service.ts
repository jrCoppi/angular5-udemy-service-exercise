//data service
import { EventEmitter } from '@angular/core';

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

    constructor() {
        // code...
    }

    changeUserStatus(id: number, status: boolean) {
      this.users[id].status = status;
    }
}