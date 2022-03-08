import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Service';

  users: any;
  constructor(private userData:UserDataService )
  {
    this.userData.users().subscribe((data)=>{
      console.warn(data)
      this.users=data;
    });
  }

  getUserFormData(data: any){
    console.warn(data)
    this.userData.saveUser(data).subscribe((result)=>{
      console.warn(result)
    });
  }



 
}
