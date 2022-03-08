import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  users(){
    return [
      {name: 'Sahik', email: 'sahik@example.com'},
      {name: 'Mahin', email: 'mahin@example.com'},
      {name: 'Ulfat', email: 'ulfat@example.com'},
      {name: 'ALayna', email: 'alayna@example.com'}
    ]
  };

}
