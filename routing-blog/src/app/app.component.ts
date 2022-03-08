import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Service';
  user: any;
  

  constructor(private userData: UserDataService ){
    console.warn(userData.users())
    this.user=this.userData.users();
   
  }

 
}
